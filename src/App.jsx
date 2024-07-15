import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IndexHome from "./components/Home/IndexHome";
import IndexWork from "./components/Work/IndexWork";
import IndexService from "./components/ServicePage/IndexService";
import IndexAbout from "./components/About/IndexAbout";
import IndexContact from "./components/Contact/IndexContact";
import IndexTwoPercent from "./components/TwoPercent/IndexTwoPercent";
import IndexGeneralTerms from "./components/GeneralTerms/IndexGeneralTerms";

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

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const Content = () => {
  const location = useLocation();

  let pageTitle = "FOURWARD";

  switch (location.pathname) {
    case "/":
      pageTitle = "FOURWARD";
      break;
    case "/work":
      pageTitle = "Work - FOURWARD";
      break;
    case "/services":
      pageTitle = "Services - FOURWARD";
      break;
    case "/about":
      pageTitle = "About - FOURWARD";
      break;
    case "/contact":
      pageTitle = "Contact - FOURWARD";
      break;
    case "/two-percent":
      pageTitle = "Two Percent - FOURWARD";
      break;
    case "/general-terms":
      pageTitle = "General Terms - FOURWARD";
      break;
    default:
      break;
  }

  useDocumentTitle(pageTitle);

  return (
    <>
      <Navbar
        color={
          location.pathname === "/services" ||
          location.pathname === "/two-percent" ||
          location.pathname === "/general-terms"
            ? "text-[#001514]"
            : ""
        }
        customClassesForText={
          location.pathname === "/services" ||
          location.pathname === "/two-percent" ||
          location.pathname === "/general-terms"
            ? "text-[#001514]"
            : ""
        }
        lineColor={
          location.pathname === "/services" ||
          location.pathname === "/two-percent" ||
          location.pathname === "/general-terms"
            ? "#001514"
            : "white"
        }
      />

      <main>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/work" element={<IndexWork />} />
          <Route path="/services" element={<IndexService />} />
          <Route path="/about" element={<IndexAbout />} />
          <Route path="/contact" element={<IndexContact />} />
          <Route path="/two-percent" element={<IndexTwoPercent />} />
          <Route path="/general-terms" element={<IndexGeneralTerms />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;
