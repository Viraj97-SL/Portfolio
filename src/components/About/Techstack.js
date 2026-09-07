import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiPostgresql } from "react-icons/di";
import {
  FaBrain, FaNetworkWired, FaDatabase, FaCogs,
  FaChartBar, FaRobot, FaLink, FaComments,
  FaFire, FaProjectDiagram, FaEye, FaChartLine,
  FaTable, FaBolt, FaWind, FaCloud
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* 1. Generative AI & Agentic Ecosystem */}
      <Col xs={4} md={2} className="tech-icons">
        <FaLink />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>LangChain & Agents</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Multi-Agent Systems</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Vector DBs & RAG</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Hugging Face & LLMs</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCogs />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>LLMOps & MLOps</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaComments />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Chatbot Dev</h6>
      </Col>

      {/* 2. Deep Learning & Computer Vision */}
      <Col xs={4} md={2} className="tech-icons">
        <FaBrain />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Gen AI & Neural Nets</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFire />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>PyTorch (Deep Learning)</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>TensorFlow & Keras</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaEye />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Computer Vision (OpenCV)</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartLine />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Scikit-Learn (ML)</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartBar />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Data Visualization</h6>
      </Col>

      {/* 3. Data Engineering & Infrastructure */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTable />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Pandas & NumPy</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>SQL & Databases</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBolt />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>PySpark</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWind />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>Apache Airflow</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCloud />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "var(--dim)" }}>GCP & Data Eng</h6>
      </Col>

    </Row>
  );
}

export default Techstack;