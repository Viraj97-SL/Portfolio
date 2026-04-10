import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import HomeAbout from "./HomeAbout";
import Type from "./Type";
import LogoCloud from "../LogoCloud/LogoCloud";
import BentoGrid from "../Bento/BentoGrid";

function Home() {
  return (
    <section>
      {/* ══════════════════ HERO ══════════════════ */}
      <div className="hero-section" id="home">
        <Particle />

        <Container style={{ position: "relative", zIndex: 1 }}>
          <Row
            className="align-items-center"
            style={{ minHeight: "100vh", paddingTop: "70px" }}
          >
            {/* Left — text */}
            <Col md={7} style={{ paddingBottom: "2rem" }}>
              <p className="hero-greeting">
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                &nbsp; Hello, World
              </p>

              <h1 className="hero-name">
                I'M <br />
                <span className="hero-name-accent">VIRAJ</span>
              </h1>

              <div style={{ marginBottom: "1.5rem" }}>
                <Type />
              </div>

              <div className="hero-cta-group">
                <Link to="/project" className="hero-cta-primary">
                  View My Work →
                </Link>
                <Link to="/contact" className="hero-cta-outline">
                  Contact Me
                </Link>
              </div>
            </Col>

            {/* Right — avatar */}
            <Col
              md={5}
              className="d-flex justify-content-center"
              style={{ paddingBottom: "2rem" }}
            >
              <div className="hero-img-wrapper">
                <div className="hero-img-glow" />
                <img
                  src={homeLogo}
                  alt="AI Engineer"
                  className="img-fluid"
                  style={{ maxHeight: "430px", position: "relative", zIndex: 1 }}
                />
              </div>
            </Col>
          </Row>
        </Container>

        {/* Scroll cue */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-mouse-dot" />
          </div>
          <span>scroll</span>
        </div>
      </div>

      {/* ══════════════════ LOGO CLOUD ══════════════════ */}
      <LogoCloud />

      {/* ══════════════════ INTRO ══════════════════ */}
      <Home2 />

      {/* ══════════════════ ABOUT PREVIEW ══════════════════ */}
      <HomeAbout />

      {/* ══════════════════ BENTO GRID ══════════════════ */}
      <BentoGrid />
    </section>
  );
}

export default Home;
