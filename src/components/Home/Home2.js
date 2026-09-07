import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import myImgAvif from "../../Assets/profile-photo.avif";
import myImgWebp from "../../Assets/profile-photo.webp";
import Picture from "../common/Picture";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="section-index">
              <span className="section-index-num">01</span>
              <span className="section-index-label">About</span>
            </p>
            <h1 style={{ fontSize: "2.6em" }}>Between the paper and the pipeline</h1>
            <p className="home-about-body">
              Most AI work sits on one side of a line. Research that never ships, or
              products that never asked whether the model was right. I have spent the
              last few years working on both sides of it, and the interesting problems
              are almost always at the seam.
            </p>
            <Link to="/about" className="hero-cta-outline">Read more →</Link>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="profile-photo-frame">
              <Picture
                avif={myImgAvif}
                webp={myImgWebp}
                width={1025}
                height={873}
                className="img-fluid profile-photo-img media-feather-all media-grade"
                alt="Viraj Bulugahapitiya"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.3em" }}>FIND ME ON</h1>
            <p>
              Feel free to <span className="text-accent">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Viraj97-SL"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/viraj97"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;