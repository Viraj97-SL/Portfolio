import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Importing your custom generated AI visual assets
import cricoracleImg from "../../Assets/Projects/cricoracle.png";
import reposentinelImg from "../../Assets/Projects/reposentinel.png";
import newsanalystImg from "../../Assets/Projects/newsanalyst.png";
import pamoryaImg from "../../Assets/Projects/pamorya.png";
import alzheimersImg from "../../Assets/Projects/alzheimers.png";
import sathchakraImg from "../../Assets/Projects/sathchakra.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Production-grade AI systems, multi-agent architectures, and predictive models I've built.
        </p>
        <Row style={{ justifyItems: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cricoracleImg}
              isBlog={false}
              title="CricOracle 2026"
              description="A production-grade T20 World Cup prediction platform. Features match outcome probabilities, first-innings score forecasts, and optimal Playing XI selection using an ensemble of XGBoost, PyTorch LSTMs, and DEAP Genetic Algorithms. Deployed with a FastAPI backend and Platt-calibrated inference."
              ghLink="https://github.com/Viraj97-SL/CricOracle2026"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reposentinelImg}
              isBlog={false}
              title="RepoSentinel & AI Learning Hub"
              description="An autonomous multi-agent system that analyzes GitHub repositories against a DS/ML/AI taxonomy. It scouts the web, arXiv, and YouTube for gaps, and synthesizes Markdown resources using Gemini 2.5 Pro via a LangGraph state machine. Features a 5-check quality gate and automated PR publishing."
              ghLink="https://github.com/Viraj97-SL/AI-ML-DS-Learning-Hub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsanalystImg}
              isBlog={false}
              title="AI News & Research Analyst"
              description="A dual-pipeline AI media empire built with LangGraph and FastAPI. Features an autonomous news aggregator and a deep-tech academic analyst that isolates and breaks down complex arXiv papers. Incorporates Human-in-the-Loop (HITL) approval gates and dynamic headless Chromium image generation."
              ghLink="https://github.com/Viraj97-SL/AI-News-Analyzer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pamoryaImg}
              isBlog={false}
              title="Pamorya AI Commerce & Stylist"
              description='An advanced multi-agent retail system built on a "Supervisor-Worker" LangGraph architecture. Integrates virtual garment try-ons (GenAI Fashion Stylist) via Docker and FastAPI. Grounded in ChromaDB to prevent hallucination, routing intents seamlessly between Sales, Data Query, and Policy agents.'
              ghLink="https://github.com/Viraj97-SL/apparel-agent-backend"
              demoLink="https://apparel-agent-frontend.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alzheimersImg}
              isBlog={false}
              title="Tri-Modal Alzheimer's Detection"
              description="Engineered a custom 3D Swin Transformer using PyTorch for the early detection of Alzheimer's Disease. Fused disparate healthcare data including high-dimensional 3D MRI scans, longitudinal clinical records, and biomarker sequences to handle unstructured medical data efficiently."
              ghLink="https://github.com/Viraj97-SL/Research-Early-prediction-of-Alzheimer-s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sathchakraImg}
              isBlog={false}
              title="SATH-CHAKRA AI Framework"
              description="Architected a full-stack agentic framework using LangGraph and a non-linear state machine for complex memory and reasoning loops. Engineered an intelligence layer leveraging Groq Llama-3 models paired with a headless Playwright rendering pipeline and a glassmorphic React UI."
              ghLink="https://github.com/Viraj97-SL/Sath-Chakra-AI"
              demoLink="https://sath-chakra-ai.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;