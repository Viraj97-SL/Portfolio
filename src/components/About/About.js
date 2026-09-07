import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImgAvif from "../../Assets/about.avif";
import laptopImgWebp from "../../Assets/about.webp";
import Toolstack from "./Toolstack";
import Picture from "../common/Picture";
import PageHeader from "../common/PageHeader";
import headerAvif from "../../Assets/hero-sphere.avif";
import headerWebp from "../../Assets/hero-sphere.webp";

function About() {
  return (
    <>
      <PageHeader label="Who I Am" avif={headerAvif} webp={headerWebp}>
        Know Who <span className="text-accent">I Am</span>
      </PageHeader>

      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <Picture
                avif={laptopImgAvif}
                webp={laptopImgWebp}
                width={1000}
                height={689}
                alt="about"
                className="img-fluid"
              />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="text-accent">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="text-accent">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
