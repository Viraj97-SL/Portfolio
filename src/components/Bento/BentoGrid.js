import React from "react";
import { Container } from "react-bootstrap";

const facts = [
  { title: "MSc Data Science", detail: "University of Hertfordshire" },
  { title: "Supply chain analytics", detail: "2.5 years, MAS Holdings, Sri Lanka" },
  { title: "Currently", detail: "Independent, London. Open to AI/ML engineering roles." },
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
          {facts.map((fact) => (
            <div key={fact.title} className="bento-fact">
              <h3 className="bento-fact-title">{fact.title}</h3>
              <p className="bento-fact-detail">{fact.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default BentoGrid;
