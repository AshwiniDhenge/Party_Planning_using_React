
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast' //for alert toasr message
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Services from './components/Services'
import './App.css'
function App() {

  return (
    <Router>

    <Navbar/>
    <HeroSection/>
    <Services/>
    <About/>
    <br/>
    <br/>
    <Contact/>
    <Footer/>
    <Toaster/>  
    {/* //for alert toast message */}
    </Router>
     
   
  )
}

export default App
