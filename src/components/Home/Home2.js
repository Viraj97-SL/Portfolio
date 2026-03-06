import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an <b className="purple">AI Engineer</b>, <b className="purple">Machine Learning Engineer</b>, and <b className="purple">Data Scientist</b> — bridging the full spectrum from raw data pipelines to deployed autonomous agent systems.
              <br />
              <br />I am fluent in end-to-end ML stacks including
              <i>
                <b className="purple"> Python, PyTorch, scikit-learn, SQL, and FastAPI </b>
              </i>
              — covering everything from statistical modelling to production LLM orchestration.
              <br />
              <br />
              My core interests span building &nbsp;
              <i>
                <b className="purple">Autonomous Multi-Agent Architectures (LangGraph)</b>
              </i>
              , training and deploying{" "}
              <b className="purple">Deep Learning models</b> for Computer Vision &amp; NLP, and designing scalable{" "}
              <b className="purple">Data Engineering pipelines.</b>
              <br />
              <br />
              Whenever possible, I close the gap between research and production by deploying full-stack AI systems with <b className="purple">Docker, GCP,</b> and
              <i>
                <b className="purple"> React.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
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