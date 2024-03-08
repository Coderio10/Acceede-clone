import { useState } from 'react'
import Testimonials from './components/testimonials'
import About from './components/about'
import Hero from './components/hero'
// import Parent from './components/parents'

function App() {

  return (
    <main>
      <Hero />
      <About />
      {/* <Parent /> */}
      <Testimonials />
    </main>
  )
}

export default App
