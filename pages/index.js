import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import VisionMission from '../components/VisionMission/VisionMission'
import HowItWorks from '../components/How-it-works'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <HowItWorks/>
      <Footer />
    </>
  )
}
