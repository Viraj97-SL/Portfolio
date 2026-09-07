import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      style={{ background: "transparent", border: "none" }}
    >
      <Card.Body style={{ background: "transparent", padding: 0 }}>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", color: "var(--text)" }}>
            Hi everyone, I am Viraj Bulugahapitiya based in London, UK.
            <br />
            <br />
            I am currently completing my <em>MSc in Data Science</em> at the University
            of Hertfordshire, focusing on Applied AI and Agentic Systems.
            <br />
            <br />
            I have a proven track record of bridging the gap between deep Data
            Engineering and Generative AI — building everything from 3D MRI
            diagnostic models to autonomous retail agents.
            <br />
            <br />
            Beyond code and neural networks, I am passionate about:
          </p>

          <ul style={{ paddingLeft: 0, listStyle: "none" }}>
            <li className="about-activity" style={{ color: "var(--dim)", padding: "4px 0", display: "flex", alignItems: "center" }}>
              <span className="bullet-square" aria-hidden="true" />
              Volunteering for "Data for Good" initiatives at DataKind UK
            </li>
            <li className="about-activity" style={{ color: "var(--dim)", padding: "4px 0", display: "flex", alignItems: "center" }}>
              <span className="bullet-square" aria-hidden="true" />
              Mentoring students in AI engineering through Teens in AI
            </li>
            <li className="about-activity" style={{ color: "var(--dim)", padding: "4px 0", display: "flex", alignItems: "center" }}>
              <span className="bullet-square" aria-hidden="true" />
              Exploring Supply Chain and Operations Research
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
