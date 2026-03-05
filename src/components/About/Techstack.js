import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiPostgresql, DiDocker } from "react-icons/di";
import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiHuggingface,
  SiGooglecloud,
  SiPandas,
  SiApachespark,
  SiLangchain,
  SiOpencv,
  SiApacheairflow
} from "react-icons/si";
import { FaBrain, FaNetworkWired, FaDatabase, FaCogs, FaChartBar, FaRobot } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* 1. Generative AI & Agentic Ecosystem */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLangchain />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>LangChain & Agents</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Multi-Agent Systems</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Vector DBs & RAG</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHuggingface />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Hugging Face & LLMs</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCogs />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>LLMOps & MLOps</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Chatbot Dev</h6>
      </Col>

      {/* 2. Deep Learning & Computer Vision */}
      <Col xs={4} md={2} className="tech-icons">
        <FaBrain />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Gen AI & Neural Nets</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>PyTorch (Deep Learning)</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>TensorFlow & Keras</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Computer Vision (OpenCV)</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Scikit-Learn (ML)</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartBar />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Data Visualization</h6>
      </Col>

      {/* 3. Data Engineering & Infrastructure */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Pandas & NumPy</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>SQL & Databases</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>PySpark</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>Apache Airflow</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <h6 style={{ marginTop: "15px", fontSize: "15px", color: "white" }}>GCP & Data Eng</h6>
      </Col>

    </Row>
  );
}

export default Techstack;