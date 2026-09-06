import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImgAvif from "../../Assets/profile-photo.avif";
import myImgWebp from "../../Assets/profile-photo.webp";
import Tilt from "react-parallax-tilt";
import Picture from "../common/Picture";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="text-accent"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an <b className="text-accent">AI Engineer</b>, <b className="text-accent">Machine Learning Engineer</b>, and <b className="text-accent">Data Scientist</b> — bridging the full spectrum from raw data pipelines to deployed autonomous agent systems.
              <br />
              <br />I am fluent in end-to-end ML stacks including
              <i>
                <b className="text-accent"> Python, PyTorch, scikit-learn, SQL, and FastAPI </b>
              </i>
              — covering everything from statistical modelling to production LLM orchestration.
              <br />
              <br />
              My core interests span building &nbsp;
              <i>
                <b className="text-accent">Autonomous Multi-Agent Architectures (LangGraph)</b>
              </i>
              , training and deploying{" "}
              <b className="text-accent">Deep Learning models</b> for Computer Vision &amp; NLP, and designing scalable{" "}
              <b className="text-accent">Data Engineering pipelines.</b>
              <br />
              <br />
              Whenever possible, I close the gap between research and production by deploying full-stack AI systems with <b className="text-accent">Docker, GCP,</b> and
              <i>
                <b className="text-accent"> React.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt className="profile-photo-tilt">
              <div className="profile-photo-frame">
                <Picture
                  avif={myImgAvif}
                  webp={myImgWebp}
                  width={1025}
                  height={873}
                  className="img-fluid profile-photo-img"
                  alt="Viraj Bulugahapitiya"
                />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
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