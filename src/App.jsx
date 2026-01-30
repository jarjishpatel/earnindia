import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Packages from './components/Packages'
import WhyChooseUs from './components/WhyChooseUs'
import Instructors from './components/Instructors'
import Founder from './components/Founder'
import Testimonials from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Packages />
      <WhyChooseUs />
      <Instructors />
      <Founder />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
