import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Viraj Bulugahapitiya </span>
            based in <span className="purple"> London, UK.</span>
            <br />
            I am currently completing my MSc in Data Science at the University of Hertfordshire, focusing on Applied AI and Agentic Systems.
            <br />
            I have a proven track record of bridging the gap between deep Data Engineering and Generative AI, building everything from 3D MRI diagnostic models to autonomous retail agents.
            <br />
            <br />
            Beyond writing code and architecting neural networks, I am passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Volunteering for "Data for Good" initiatives at DataKind UK
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring students in AI engineering through Teens in AI
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Supply Chain and Operations Research
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build AI systems that bridge the gap between intelligence and real-world impact."{" "}
          </p>
          <footer className="blockquote-footer">Viraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;