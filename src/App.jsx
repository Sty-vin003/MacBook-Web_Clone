import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import Performance from './components/Perfomance'
import Features from './components/Features'
import Highlights from './components/Hilights'
import Footer from './components/Footer'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Showcase from './components/Showcase'


gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer/>
      <Showcase/>
      <Performance />
      <Features />
      <Highlights />
      <Footer/>
    </main>
  )
}

export default App