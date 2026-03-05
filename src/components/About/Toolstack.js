import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPycharm,
  SiJupyter,
  SiVercel,
  SiLinux,
  SiRailway
} from "react-icons/si";
import { FaWindows, FaChartBar } from "react-icons/fa"; // Safe icons that won't crash

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><SiLinux /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaWindows /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPycharm /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJupyter /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaChartBar /></Col> {/* Represents Data Dashboards/PowerBI */}
      <Col xs={4} md={2} className="tech-icons"><SiRailway /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVercel /></Col>
    </Row>
  );
}

export default Toolstack;