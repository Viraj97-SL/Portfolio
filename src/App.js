import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound/NotFound";
import Grain from "./components/Grain/Grain";
import "./styles/tokens.css";
import "./styles/fonts.css";
import "./styles/typography.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Code-split every route but Home so / only ships the JS it needs
// (Resume alone pulls in react-pdf/pdfjs-dist, which is otherwise the
// single largest contributor to the shared bundle).
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Research = lazy(() => import("./components/Research/Research"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Signals = lazy(() => import("./components/Signals/Signals"));

function App() {
  return (
    <Router>
      <Grain />
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/project"   element={<Projects />} />
            <Route path="/about"     element={<About />} />
            <Route path="/research"  element={<Research />} />
            <Route path="/resume"    element={<Resume />} />
            <Route path="/signals"   element={<Signals />} />
            <Route path="/contact"   element={<Contact />} />
            <Route path="*"          element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
