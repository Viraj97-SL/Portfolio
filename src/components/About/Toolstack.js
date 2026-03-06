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
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>VS Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillExperiment />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Jupyter Notebook</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoDocker />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Docker</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoGit />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoGithub />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>GitHub</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Terminal / CLI</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Linux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoPostgresql />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>PostgreSQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFlask />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>FastAPI / Flask</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCloud />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>GCP / Cloud</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;