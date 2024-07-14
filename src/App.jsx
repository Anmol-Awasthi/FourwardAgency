import React, { useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IndexHome from "./components/Home/IndexHome";
import IndexWork from "./components/Work/IndexWork";
import IndexService from "./components/ServicePage/IndexService";
import IndexAbout from "./components/About/IndexAbout";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smooth: true,
      direction: "vertical",
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
    <Router>
      <ScrollToTop />
      <Content />
    </Router>
  );
};

const Content = () => {
  const location = useLocation();

  return (
    <>
      <Navbar color={location.pathname === '/services' ? 'text-[#001514]' : ''}  customClassesForText={location.pathname === '/services' ? 'text-[#001514]' : ''} lineColor={location.pathname === '/services' ? '#001514' : 'white'} />
      <main>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/work" element={<IndexWork />} />
          <Route path="/services" element={<IndexService />} />
          <Route path="/about" element={<IndexAbout />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;
