import Faqs from '../components/FAQS/Faqs'
import Team from '../components/Team/Team'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import FeaturedArticles from '../components/FeaturedArticles/FeaturedArticles'
import Hero from '../components/Hero/Hero'
import VisionMission from '../components/VisionMission/VisionMission'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <FeaturedArticles />
      <Team />
      <Faqs />
      <Footer />
    </>
  )
}
