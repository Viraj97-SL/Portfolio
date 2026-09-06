import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home-facts.css";

const facts = [
  { title: "MSc Data Science", detail: "University of Hertfordshire" },
  { title: "Supply chain analytics", detail: "2.5 years, MAS Holdings, Sri Lanka" },
  { title: "Currently", detail: "Independent, London. Open to AI/ML engineering roles." },
];

function HomeFacts() {
  return (
    <section className="home-facts">
      <Container>
        <Row>
          {facts.map((fact) => (
            <Col md={4} key={fact.title} className="home-facts-item">
              <h3 className="home-facts-title">{fact.title}</h3>
              <p className="home-facts-detail">{fact.detail}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default HomeFacts;
