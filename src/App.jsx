// src/App.jsx
import React, { useEffect } from 'react';
import './index.css';
import Hero from './components/Home/Hero';
import Navbar from './components/Home/Navbar';
import Intro from './components/Home/Intro';
import Lenis from '@studio-freight/lenis';
import Marquee from './components/Home/Marquee';
import Testimonials from './components/Home/Testimonials';
import Footer from './components/Home/Footer';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smooth: true,
      direction: 'vertical',
      wrapper: window,
      content: document.body,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Marquee />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
