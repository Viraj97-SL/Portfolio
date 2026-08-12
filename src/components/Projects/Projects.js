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
import massifyxImg from "../../Assets/Projects/MassifyX Global.png";
import marketforgeImg from "../../Assets/Projects/MarketForge AI.png";
import jobfinderImg from "../../Assets/Projects/JobFinder.png";
import visionaidImg from "../../Assets/Projects/VisionAID.png";
import scopeguardImg from "../../Assets/Projects/ScopeGuuard.png";
import ukomainImg from "../../Assets/Projects/ICU Command Center-selection.png";

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

          {/* ── Featured — brought to the front ── */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketforgeImg}
              featured
              isBlog={false}
              category="Multi-Agent · Career Intelligence"
              tags={["LangGraph", "MLflow", "Airflow", "FastAPI", "TypeScript"]}
              title="MarketForge AI"
              description="A full-stack career intelligence platform for the UK job market. The core engine runs 9 coordinated LangGraph agents with MLflow drift monitoring and Airflow-orchestrated pipelines, backed by a GDPR-compliant CV parsing service and a FastAPI + APScheduler production backend."
              ghLink="https://github.com/Viraj97-SL/marketforge-ai"
              demoLink="https://www.marketforge.digital/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ukomainImg}
              featured
              isBlog={false}
              category="Hackathon Win · Clinical AI"
              tags={["LangChain", "Clinical AI", "Model Governance", "SHAP / DCA", "Streamlit"]}
              title="UKOMAIN26 Hackathon — Clinical AI"
              description='🏆 Best Multimodal Idea at the MultimodalAI’26 Hackathon (UKOMAIN × UCL East). Built a full AI governance pipeline for ICU early-warning systems — three competing models triangulated for trust, an explicit MNAR-aware feature for missing clinical notes, a 6-tab evidence dashboard (AUROC/AUPRC, calibration, DCA, SHAP), and a voice-driven ICU nursing monitor powered by a LangChain clinical agent.'
              ghLink="https://github.com/Viraj97-SL/UKOMAIN26_Hackathon_Clinical"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visionaidImg}
              featured
              isBlog={false}
              category="Computer Vision · Assistive AI"
              tags={["Computer Vision", "AI Agent"]}
              title="VisionAId"
              description="🏆 1st place, Data Science Project Club, University of Hertfordshire. A multi-agent assistive system for visually impaired users, coordinating Navigation, Vision, and E-commerce agents over a lightweight MCP protocol — Whisper for speech, YOLOv8 + OpenCV for real-time recognition, running fully offline on a Raspberry Pi."
              ghLink="https://github.com/Viraj97-SL/VisionAId"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pamoryaImg}
              featured
              isBlog={false}
              category="Multi-Agent · Retail"
              tags={["LangGraph", "GenAI", "ChromaDB", "Docker"]}
              title="Pamorya AI Commerce & Stylist"
              description='An advanced multi-agent retail system built on a "Supervisor-Worker" LangGraph architecture. Integrates virtual garment try-ons (GenAI Fashion Stylist) via Docker and FastAPI. Grounded in ChromaDB to prevent hallucination, routing intents seamlessly between Sales, Data Query, and Policy agents.'
              ghLink="https://github.com/Viraj97-SL/apparel-agent-backend"
              demoLink="https://apparel-agent-frontend.vercel.app"
            />
          </Col>

          {/* ── Rest, ordered by depth / tech / impact ── */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alzheimersImg}
              isBlog={false}
              category="Research · Medical AI"
              tags={["PyTorch", "3D Swin Transformer", "Multimodal Fusion"]}
              title="Tri-Modal Alzheimer's Detection"
              description="Engineered a custom 3D Swin Transformer using PyTorch for the early detection of Alzheimer's Disease. Fused disparate healthcare data including high-dimensional 3D MRI scans, longitudinal clinical records, and biomarker sequences to handle unstructured medical data efficiently."
              ghLink="https://github.com/Viraj97-SL/Research-Early-prediction-of-Alzheimer-s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cricoracleImg}
              isBlog={false}
              category="Predictive AI · Sports"
              tags={["XGBoost", "PyTorch LSTM", "Genetic Algorithms", "FastAPI"]}
              title="CricOracle 2026"
              description="A production-grade T20 World Cup prediction platform. Features match outcome probabilities, first-innings score forecasts, and optimal Playing XI selection using an ensemble of XGBoost, PyTorch LSTMs, and DEAP Genetic Algorithms. Deployed with a FastAPI backend and Platt-calibrated inference."
              ghLink="https://github.com/Viraj97-SL/CricOracle2026"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={massifyxImg}
              isBlog={false}
              category="Supply Chain Intelligence"
              tags={["Node.js", "AI Enrichment", "Live Monitoring", "REST API"]}
              title="MassifyX Global"
              description="A real-time supply chain disruption monitoring platform. The MassifyX Intelligence Service ingests global disruption signals, enriches them with AI-generated analysis, and exposes a read API that powers a live monitor dashboard for logistics and procurement teams."
              ghLink="https://github.com/Viraj97-SL/MassifyX_Global"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reposentinelImg}
              isBlog={false}
              category="Multi-Agent · LangGraph"
              tags={["LangGraph", "Gemini 2.5 Pro", "GitHub Automation"]}
              title="RepoSentinel & AI Learning Hub"
              description="An autonomous multi-agent system that analyzes GitHub repositories against a DS/ML/AI taxonomy. It scouts the web, arXiv, and YouTube for gaps, and synthesizes Markdown resources using Gemini 2.5 Pro via a LangGraph state machine. Features a 5-check quality gate and automated PR publishing."
              ghLink="https://github.com/Viraj97-SL/AI-ML-DS-Learning-Hub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsanalystImg}
              isBlog={false}
              category="Multi-Agent · Automation"
              tags={["LangGraph", "FastAPI", "HITL", "Headless Chromium"]}
              title="AI News & Research Analyst"
              description="A dual-pipeline AI media empire built with LangGraph and FastAPI. Features an autonomous news aggregator and a deep-tech academic analyst that isolates and breaks down complex arXiv papers. Incorporates Human-in-the-Loop (HITL) approval gates and dynamic headless Chromium image generation."
              ghLink="https://github.com/Viraj97-SL/AI-News-Analyzer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sathchakraImg}
              isBlog={false}
              category="Agentic Framework"
              tags={["LangGraph", "Groq Llama-3", "Playwright", "React"]}
              title="SATH-CHAKRA AI Framework"
              description="Architected a full-stack agentic framework using LangGraph and a non-linear state machine for complex memory and reasoning loops. Engineered an intelligence layer leveraging Groq Llama-3 models paired with a headless Playwright rendering pipeline and a glassmorphic React UI."
              ghLink="https://github.com/Viraj97-SL/Sath-Chakra-AI"
              demoLink="https://sath-chakra-ai.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobfinderImg}
              isBlog={false}
              category="Autonomous Agents · Career"
              tags={["Multi-Agent", "Automation", "NLP"]}
              title="JobFinder"
              description="An autonomous multi-agent job-hunting pipeline that discovers, evaluates, and prepares personalised applications for Data Science, AI Engineering, and ML Engineering roles across the UK — end to end, without manual triage."
              ghLink="https://github.com/Viraj97-SL/JobFinder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scopeguardImg}
              isBlog={false}
              category="Hackathon · London"
              tags={["Cursor", "Rapid Prototyping", "Hackathon"]}
              title="ScopeGuard"
              description="Built at the Cursor Hackathon 2026 in London under a tight build window — a rapid-prototyped tool shipped end-to-end during the live event."
              ghLink="https://github.com/Viraj97-SL/ScopeGuard_Cursor-Hackathon-2026"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
