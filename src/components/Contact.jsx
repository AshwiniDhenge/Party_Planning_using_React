import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios.post(
        "https://api.web3forms.com/submit",
        {
          access_key: "3988f4d8-47d0-4375-a9f3-884e5d45c73a", // Replace with your Web3Forms access key
          name,
          email,
          subject,
          message,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        toast.error("Something went wrong, please try again.");
        console.log(error);
      });
  };

  return (
    <>
      <div className="contact container">
        <h1 style={{ fontSize: "2rem" }}>GET IN TOUCH📩</h1>
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Nagpur, Maharashtra 441106</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91 000-0000-000</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <a href="mailto:ashwinidhenge121@gmail.com" target="blank">
              <p>ashwinidhenge121@gmail.com</p>
            </a>
          </div>
        </div>
        <br />
        <br />
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476261.07499746385!2d78.74354663719544!3d21.160767928178053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718454933827!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// import React, { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSendMessage = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:4000/api/message/send",
//         { name, email, subject, message },
//         { withCredentials: true, headers: { "Content-Type": "application/json" } }
//       );
//       toast.success(res.data.message || "Message sent successfully");
//       setName("");
//       setEmail("");
//       setSubject("");
//       setMessage("");
//     } catch (error) {
//       console.error("Error sending message:", error);
//       if (error.response && error.response.data) {
//         toast.error(error.response.data.message || "Failed to send message");
//       } else {
//         toast.error("Network or server error");
//       }
//     }
//   };

//   return (
//     <div className="contact container">
//       <h1 style={{ fontSize: "2rem" }}>GET IN TOUCH📩</h1>
//       <div className="banner">
//         <div className="item">
//           <h4>Address</h4>
//           <p>Nagpur, Maharashtra 441106</p>
//         </div>
//         <div className="item">
//           <h4>Call Us</h4>
//           <p>Call Us: +91 000-0000-000</p>
//         </div>
//         <div className="item">
//           <h4>Mail Us</h4>
//           <a href="mailto:ashwinidhenge121@gmail.com" target="_blank" rel="noopener noreferrer">
//             <p>ashwinidhenge121@gmail.com</p>
//           </a>
//         </div>
//       </div>
//       <br />
//       <br />
//       <div className="banner">
//         <div className="item">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476261.07499746385!2d78.74354663719544!3d21.160767928178053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718454933827!5m2!1sen!2sin"
//             style={{ border: 0, width: "100%", height: "450px" }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//         <div className="item">
//           <form onSubmit={handleSendMessage}>
//             <h2>CONTACT</h2>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="E-mail"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="Subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               required
//             />
//             <textarea
//               rows={10}
//               placeholder="Message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             />
//             <button type="submit">Send</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



