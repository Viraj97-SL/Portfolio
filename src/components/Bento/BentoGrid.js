import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCode, FaTrophy, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const stats = [
  { icon: <FaCode />, value: "12", label: "Production AI/ML projects shipped", to: "/project" },
  { icon: <FaTrophy />, value: "MMAI'26", label: "Best Multimodal Idea, UKOMAIN × UCL East", to: "/signals" },
  { icon: <FaGraduationCap />, value: "MSc", label: "Data Science, University of Hertfordshire" },
  { icon: <FaBriefcase />, value: "2.5 yrs", label: "Supply chain analytics, MAS Holdings" },
];

function BentoGrid() {
  return (
    <section className="bento-section">
      <Container>
        <p className="section-index">
          <span className="section-index-num">01</span>
          <span className="section-index-label">About</span>
        </p>

        <div className="bento-facts">
          {stats.map((fact) => {
            const inner = (
              <>
                <div className="bento-fact-icon">{fact.icon}</div>
                <h3 className="bento-fact-title">{fact.value}</h3>
                <p className="bento-fact-detail">{fact.label}</p>
              </>
            );
            return fact.to ? (
              <Link key={fact.label} to={fact.to} className="bento-fact bento-fact-link">
                {inner}
              </Link>
            ) : (
              <div key={fact.label} className="bento-fact">
                {inner}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default BentoGrid;
