import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio /> 
     
      {/* <a href="#portfolio"></a> */}
      <Testimonials />
      <Contact />
    </>
  )
}

export default HomePage