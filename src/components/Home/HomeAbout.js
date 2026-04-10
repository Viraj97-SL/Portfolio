import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImPointRight } from "react-icons/im";
import laptopImg from "../../Assets/about.png";

const highlights = [
  'Volunteering for "Data for Good" initiatives at DataKind UK',
  "Mentoring students in AI engineering through Teens in AI",
  "Exploring Supply Chain and Operations Research",
];

function HomeAbout() {
  return (
    <section className="homeabout-section">
      <Container>
        <p className="ha-label">Who I Am</p>
        <h2 className="ha-title">
          About <span>Me</span>
        </h2>

        <Row className="align-items-center ha-row">
          {/* Text card */}
          <Col lg={6} md={12} className="ha-text-col">
            <div className="ha-card">
              <p className="ha-text">
                Hi, I'm{" "}
                <span className="purple">Viraj Bulugahapitiya</span> — an{" "}
                <span className="purple">AI Engineer</span>,{" "}
                <span className="purple">ML Engineer</span> and{" "}
                <span className="purple">Data Scientist</span> based in{" "}
                <span className="purple">London, UK</span>.
              </p>
              <p className="ha-text">
                Currently completing my{" "}
                <span className="purple">MSc in Data Science</span> at the
                University of Hertfordshire, I specialise in autonomous
                multi-agent architectures, production LLM deployment, and
                scalable data engineering pipelines.
              </p>

              <ul className="ha-list">
                {highlights.map((item, i) => (
                  <li key={i}>
                    <ImPointRight className="ha-list-icon" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="ha-actions">
                <Link to="/about" className="hero-cta-outline">
                  Full Profile →
                </Link>
                <Link to="/contact" className="hero-cta-primary">
                  Hire Me
                </Link>
              </div>
            </div>
          </Col>

          {/* Image */}
          <Col lg={6} md={12} className="ha-img-col">
            <div className="ha-img-wrap">
              <img src={laptopImg} alt="about" className="img-fluid ha-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeAbout;
