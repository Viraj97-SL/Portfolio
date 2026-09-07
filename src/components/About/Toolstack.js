import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaCode,
  FaTerminal,
  FaLinux,
  FaCloud,
  FaFlask,
} from "react-icons/fa";
import { AiFillExperiment } from "react-icons/ai";
import {
  BiLogoPostgresql,
  BiLogoDocker,
  BiLogoGit,
  BiLogoGithub,
} from "react-icons/bi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>VS Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillExperiment />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Jupyter Notebook</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoDocker />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Docker</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoGit />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoGithub />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>GitHub</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Terminal / CLI</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Linux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoPostgresql />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>PostgreSQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFlask />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>FastAPI / Flask</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCloud />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>GCP / Cloud</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;