import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      style={{ background: "transparent", border: "none" }}
    >
      <Card.Body style={{ background: "transparent", padding: 0 }}>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "rgba(255,255,255,0.82)" }}>
            Hi everyone, I am{" "}
            <span className="purple">Viraj Bulugahapitiya</span> based in{" "}
            <span className="purple">London, UK.</span>
            <br />
            <br />
            I am currently completing my{" "}
            <span className="purple">MSc in Data Science</span> at the University
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
            <li className="about-activity" style={{ color: "rgba(255,255,255,0.75)", padding: "4px 0" }}>
              <ImPointRight style={{ color: "#00d2ff", marginRight: 8 }} />
              Volunteering for "Data for Good" initiatives at DataKind UK
            </li>
            <li className="about-activity" style={{ color: "rgba(255,255,255,0.75)", padding: "4px 0" }}>
              <ImPointRight style={{ color: "#00d2ff", marginRight: 8 }} />
              Mentoring students in AI engineering through Teens in AI
            </li>
            <li className="about-activity" style={{ color: "rgba(255,255,255,0.75)", padding: "4px 0" }}>
              <ImPointRight style={{ color: "#00d2ff", marginRight: 8 }} />
              Exploring Supply Chain and Operations Research
            </li>
          </ul>

          <p style={{ color: "#6ab0d4", marginTop: "1rem" }}>
            "Build AI systems that bridge the gap between intelligence and
            real-world impact."
          </p>
          <footer className="blockquote-footer" style={{ color: "#6ab0d4" }}>
            Viraj
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
