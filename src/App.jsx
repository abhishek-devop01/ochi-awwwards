import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Playfull from './components/Playfull'
import Featured from './components/Featured'
import Cards from './components/Cards'

const App = () => {
  return (
    <div  className='w-full min-h-screen text-white bg-zinc-900'>
     <Navbar />
     <LandingPage />
     <Marquee />
     <About />
     <Playfull />
     <Featured />
     <Cards />
    </div>
  )
}

export default App