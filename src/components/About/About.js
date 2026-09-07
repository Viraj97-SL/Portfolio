import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImgAvif from "../../Assets/New_photos/ABout sec intro.avif";
import laptopImgWebp from "../../Assets/New_photos/ABout sec intro.webp";
import Toolstack from "./Toolstack";
import Picture from "../common/Picture";
import PageHeader from "../common/PageHeader";
import headerAvif from "../../Assets/hero-sphere.avif";
import headerWebp from "../../Assets/hero-sphere.webp";
import skillsetBandAvif from "../../Assets/New_photos/Sec level professional skillset.avif";
import skillsetBandWebp from "../../Assets/New_photos/Sec level professional skillset.webp";
import toolsBandAvif from "../../Assets/New_photos/tools i used.avif";
import toolsBandWebp from "../../Assets/New_photos/tools i used.webp";

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
                width={1200}
                height={2150}
                alt="A brass armillary sphere standing on aged oak, beside a stack of worn leather-bound books"
                className="img-fluid media-feather-all media-grade"
              />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="text-accent">Skillset </strong>
          </h1>

          <Picture
            avif={skillsetBandAvif}
            webp={skillsetBandWebp}
            width={1200}
            height={655}
            alt=""
            className="section-band-img media-feather-all media-grade"
          />
          <Techstack />

          <h1 className="project-heading">
            <strong className="text-accent">Tools</strong> I use
          </h1>

          <Picture
            avif={toolsBandAvif}
            webp={toolsBandWebp}
            width={1200}
            height={655}
            alt=""
            className="section-band-img media-feather-all media-grade"
          />
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
