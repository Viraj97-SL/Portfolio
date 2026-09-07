import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImPointRight } from "react-icons/im";
import laptopImgAvif from "../../Assets/New_photos/Home about.avif";
import laptopImgWebp from "../../Assets/New_photos/Home about.webp";
import Picture from "../common/Picture";

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
                Hi, I'm Viraj Bulugahapitiya — an <em>AI Engineer</em>,{" "}
                <em>ML Engineer</em> and <em>Data Scientist</em> based in London, UK.
              </p>
              <p className="ha-text">
                Currently completing my <em>MSc in Data Science</em> at the
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
                  Get in touch
                </Link>
              </div>
            </div>
          </Col>

          {/* Image */}
          <Col lg={6} md={12} className="ha-img-col">
            <div className="ha-img-wrap">
              <Picture
                avif={laptopImgAvif}
                webp={laptopImgWebp}
                width={1200}
                height={655}
                alt="Overhead flatlay of a brass sextant, an open notebook, and drafting instruments on linen"
                className="img-fluid ha-img media-feather-all media-grade"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeAbout;
