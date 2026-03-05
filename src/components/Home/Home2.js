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
              I am an AI Engineer specializing in LLM-based agent systems and production-grade orchestration.
              <br />
              <br />I am fluent in heavy-hitting ML and engineering stacks like
              <i>
                <b className="purple"> Python, PyTorch, SQL, and FastAPI. </b>
              </i>
              <br />
              <br />
              My field of interest revolves around building complex &nbsp;
              <i>
                <b className="purple">Autonomous Multi-Agent Architectures (LangGraph)</b> and
                solving high-impact problems in{" "}
                <b className="purple">
                  Healthcare Computer Vision and Data Engineering.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for AI by architecting full-stack intelligence pipelines using <b className="purple">Docker, GCP,</b> and
              <i>
                <b className="purple"> Modern UI Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React and Next.js.</b>
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