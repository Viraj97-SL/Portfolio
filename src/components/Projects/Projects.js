import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few production-grade AI and multi-agent systems I've architected.
        </p>
        <Row style={{ justifyItems: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Pamorya AI Commerce Assistant"
              description='An advanced multi-agent AI commerce system utilizing a "Supervisor-Worker" architecture built on LangGraph. Features a central Supervisor AI that routes intents to specialist agents (Data Query, Sales, Policy). Includes RAG hallucination control and a FastAPI microservices backend deployed on Railway.'
              ghLink="https://github.com/Viraj97-SL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tri-Modal Alzheimer's Detection"
              description="Engineered a custom 3D Swin Transformer using PyTorch for the early detection of Alzheimer's Disease. Fused disparate healthcare data including high-dimensional 3D MRI scans, longitudinal clinical records, and biomarker sequences to handle unstructured medical data efficiently."
              ghLink="https://github.com/Viraj97-SL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SATH-CHAKRA AI Framework"
              description="Architected a full-stack agentic framework using LangGraph and a non-linear state machine for complex memory and reasoning loops. Engineered an intelligence layer leveraging Groq Llama-3 models paired with a headless Playwright rendering pipeline and a glassmorphic React/Vite UI."
              ghLink="https://github.com/Viraj97-SL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="VisionAID Multi-Agent System"
              description="An award-winning multi-agent assistive AI system. Developed to run efficiently with custom Model Context Protocol (MCP) coordination. Won the University of Hertfordshire Agentic AI Competition by demonstrating robust, real-world utility."
              ghLink="https://github.com/Viraj97-SL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="GenAI Fashion Stylist"
              description="A multi-agent retail workforce simulation using FastAPI and Docker. Integrated the IDM-VTON visual AI model for virtual garment try-ons, bridging text-based LLMs with computer vision. Grounded in ChromaDB to ensure zero hallucination on inventory data."
              ghLink="https://github.com/Viraj97-SL"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;