import React from 'react'
import Hero from './Hero'
import Intro from './Intro'
import Marquee from './Marquee'
import Testimonials from './Testimonials'
import Navbar from '../Navbar'
import Footer from '../Footer'

function index() {
  return (
    <div>
      <Hero />
      <Intro />
      <Marquee />
      <Testimonials />
    </div>
  )
}

export default index
