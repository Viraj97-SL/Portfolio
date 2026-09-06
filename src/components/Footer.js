import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <p>Viraj Bulugahapitiya · London</p>
        </Col>
        <Col md="4" className="footer-body">
          <a href="https://github.com/Viraj97-SL" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {" · "}
          <a href="https://www.linkedin.com/in/viraj97" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {" · "}
          <a href="mailto:amanthavirajavb@gmail.com">Email</a>
        </Col>
        <Col md="4" className="footer-copywright">
          <p>Built by hand. {year}.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
