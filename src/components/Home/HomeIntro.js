import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionIndex from "../common/SectionIndex";
import "./home-intro.css";

function HomeIntro() {
  return (
    <section className="home-intro">
      <Container>
        <SectionIndex n="01" label="About" />
        <h2 className="home-intro-title">Between the paper and the pipeline</h2>
        <p className="home-intro-body">
          Most AI work sits on one side of a line. Research that never
          ships, or products that never asked whether the model was
          right. I have spent the last few years working on both sides
          of it, and the interesting problems are almost always at the
          seam.
        </p>
        <Link to="/about" className="home-intro-link">
          Read more →
        </Link>
      </Container>
    </section>
  );
}

export default HomeIntro;
