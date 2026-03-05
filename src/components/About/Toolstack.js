import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaLinux, FaWindows, FaCode, FaBook, FaChartBar, FaServer, FaCloudUploadAlt } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><FaLinux /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaWindows /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaCode /></Col> {/* IDEs */}
      <Col xs={4} md={2} className="tech-icons"><FaBook /></Col> {/* Notebooks */}
      <Col xs={4} md={2} className="tech-icons"><FaChartBar /></Col> {/* Dashboards */}
      <Col xs={4} md={2} className="tech-icons"><FaServer /></Col> {/* Deployment */}
      <Col xs={4} md={2} className="tech-icons"><FaCloudUploadAlt /></Col> {/* Cloud Hosting */}
    </Row>
  );
}

export default Toolstack;