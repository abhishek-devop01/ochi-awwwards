import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Playfull from './components/Playfull'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {


const locomotiveScroll = new LocomotiveScroll()
  return (
    <div  className='w-full min-h-screen text-white bg-zinc-900'>
     <Navbar />
     <LandingPage />
     <Marquee />
     <About />
     <Playfull />
     <Featured />
     <Cards />
     <Footer />
    </div>
  )
}

export default App