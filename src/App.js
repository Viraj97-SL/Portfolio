import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Code-split every route but Home so / only ships the JS it needs
// (Resume alone pulls in react-pdf/pdfjs-dist, which is otherwise the
// single largest contributor to the shared bundle).
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Certificates = lazy(() => import("./components/Certificates/Certificates"));
const Achievements = lazy(() => import("./components/Achievements/Achievements"));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/"             element={<Home />} />
            <Route path="/project"      element={<Projects />} />
            <Route path="/about"        element={<About />} />
            <Route path="/resume"       element={<Resume />} />
            <Route path="/contact"      element={<Contact />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="*"             element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
