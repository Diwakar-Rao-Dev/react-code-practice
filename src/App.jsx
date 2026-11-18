import AboutUs from "./AboutUs/AboutUs"
import CTA from "./CTA/CTA"
import Footer from "./Footer/Footer"
import HeroSection from "./HeroSection/HeroSection"
import Navbar from "./Navbar/Navbar"
import OurClient from "./OurClients/OurClient"
import OurRecentProject from "./OurRecentPro/OurRecentProject"
import OurServices from "./OurServices/OurServices"


const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>  
    <OurServices/>
    <AboutUs/>  
    <OurRecentProject/>
    <OurClient/>
    <CTA/>
    <Footer/>
    </>
  )
}

export default App