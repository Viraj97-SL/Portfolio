import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import PageHeader from "../common/PageHeader";
import headerAvif from "../../Assets/PageHeaders/projects.avif";
import headerWebp from "../../Assets/PageHeaders/projects.webp";

// Importing your custom generated AI visual assets (AVIF primary, WebP fallback)
import cricoracleAvif from "../../Assets/Projects/cricoracle.avif";
import cricoracleWebp from "../../Assets/Projects/cricoracle.webp";
import reposentinelAvif from "../../Assets/Projects/reposentinel.avif";
import reposentinelWebp from "../../Assets/Projects/reposentinel.webp";
import newsanalystAvif from "../../Assets/Projects/newsanalyst.avif";
import newsanalystWebp from "../../Assets/Projects/newsanalyst.webp";
import pamoryaAvif from "../../Assets/Projects/pamorya.avif";
import pamoryaWebp from "../../Assets/Projects/pamorya.webp";
import alzheimersAvif from "../../Assets/Projects/alzheimers.avif";
import alzheimersWebp from "../../Assets/Projects/alzheimers.webp";
import sathchakraAvif from "../../Assets/Projects/sathchakra.avif";
import sathchakraWebp from "../../Assets/Projects/sathchakra.webp";
import massifyxAvif from "../../Assets/Projects/MassifyX Global.avif";
import massifyxWebp from "../../Assets/Projects/MassifyX Global.webp";
import marketforgeAvif from "../../Assets/Projects/MarketForge AI.avif";
import marketforgeWebp from "../../Assets/Projects/MarketForge AI.webp";
import jobfinderAvif from "../../Assets/Projects/JobFinder.avif";
import jobfinderWebp from "../../Assets/Projects/JobFinder.webp";
import visionaidAvif from "../../Assets/Projects/VisionAID.avif";
import visionaidWebp from "../../Assets/Projects/VisionAID.webp";
import scopeguardAvif from "../../Assets/Projects/ScopeGuuard.avif";
import scopeguardWebp from "../../Assets/Projects/ScopeGuuard.webp";
import ukomainAvif from "../../Assets/Projects/ICU Command Center-selection.avif";
import ukomainWebp from "../../Assets/Projects/ICU Command Center-selection.webp";

const cricoracleImg = { avif: cricoracleAvif, webp: cricoracleWebp, width: 1200, height: 800 };
const reposentinelImg = { avif: reposentinelAvif, webp: reposentinelWebp, width: 1200, height: 800 };
const newsanalystImg = { avif: newsanalystAvif, webp: newsanalystWebp, width: 1200, height: 800 };
const pamoryaImg = { avif: pamoryaAvif, webp: pamoryaWebp, width: 1200, height: 800 };
const alzheimersImg = { avif: alzheimersAvif, webp: alzheimersWebp, width: 1200, height: 799 };
const sathchakraImg = { avif: sathchakraAvif, webp: sathchakraWebp, width: 1200, height: 799 };
const massifyxImg = { avif: massifyxAvif, webp: massifyxWebp, width: 1200, height: 675 };
const marketforgeImg = { avif: marketforgeAvif, webp: marketforgeWebp, width: 1200, height: 675 };
const jobfinderImg = { avif: jobfinderAvif, webp: jobfinderWebp, width: 1200, height: 675 };
const visionaidImg = { avif: visionaidAvif, webp: visionaidWebp, width: 1200, height: 675 };
const scopeguardImg = { avif: scopeguardAvif, webp: scopeguardWebp, width: 1200, height: 675 };
const ukomainImg = { avif: ukomainAvif, webp: ukomainWebp, width: 1200, height: 675 };

const groups = [
  {
    title: "Research and deep learning",
    description: "Work where the question mattered more than the product.",
    projects: [
      {
        image: alzheimersImg,
        category: "Research · Medical AI",
        tags: ["PyTorch", "3D Swin Transformer", "Multimodal Fusion"],
        title: "Tri-Modal Alzheimer's Detection",
        description: "Engineered a custom 3D Swin Transformer using PyTorch for the early detection of Alzheimer's Disease. Fused disparate healthcare data including high-dimensional 3D MRI scans, longitudinal clinical records, and biomarker sequences to handle unstructured medical data efficiently.",
        ghLink: "https://github.com/Viraj97-SL/Research-Early-prediction-of-Alzheimer-s",
      },
    ],
  },
  {
    title: "Agentic and multi-agent systems",
    description: "Systems that decide what to do next without being told.",
    projects: [
      {
        image: marketforgeImg,
        category: "Multi-Agent · Career Intelligence",
        tags: ["LangGraph", "MLflow", "Airflow", "FastAPI", "TypeScript"],
        title: "MarketForge AI",
        description: "A full-stack career intelligence platform for the UK job market. The core engine runs 9 coordinated LangGraph agents with MLflow drift monitoring and Airflow-orchestrated pipelines, backed by a GDPR-compliant CV parsing service and a FastAPI + APScheduler production backend.",
        ghLink: "https://github.com/Viraj97-SL/marketforge-ai",
        demoLink: "https://www.marketforge.digital/",
      },
      {
        image: reposentinelImg,
        category: "Multi-Agent · LangGraph",
        tags: ["LangGraph", "Gemini 2.5 Pro", "GitHub Automation"],
        title: "RepoSentinel & AI Learning Hub",
        description: "An autonomous multi-agent system that analyzes GitHub repositories against a DS/ML/AI taxonomy. It scouts the web, arXiv, and YouTube for gaps, and synthesizes Markdown resources using Gemini 2.5 Pro via a LangGraph state machine. Features a 5-check quality gate and automated PR publishing.",
        ghLink: "https://github.com/Viraj97-SL/AI-ML-DS-Learning-Hub",
      },
      {
        image: newsanalystImg,
        category: "Multi-Agent · Automation",
        tags: ["LangGraph", "FastAPI", "HITL", "Headless Chromium"],
        title: "AI News & Research Analyst",
        description: "A dual-pipeline AI media system built with LangGraph and FastAPI. Features an autonomous news aggregator and a deep-tech academic analyst that isolates and breaks down complex arXiv papers. Incorporates human-in-the-loop approval gates and dynamic headless Chromium image generation.",
        ghLink: "https://github.com/Viraj97-SL/AI-News-Analyzer",
      },
      {
        image: sathchakraImg,
        category: "Agentic Framework",
        tags: ["LangGraph", "Groq Llama-3", "Playwright", "React"],
        title: "SATH-CHAKRA AI Framework",
        description: "A full-stack agentic framework using LangGraph and a non-linear state machine for complex memory and reasoning loops. An intelligence layer leverages Groq Llama-3 models paired with a headless Playwright rendering pipeline and a React UI.",
        ghLink: "https://github.com/Viraj97-SL/Sath-Chakra-AI",
        demoLink: "https://sath-chakra-ai.vercel.app",
      },
      {
        image: jobfinderImg,
        category: "Autonomous Agents · Career",
        tags: ["Multi-Agent", "Automation", "NLP"],
        title: "JobFinder",
        description: "An autonomous multi-agent job-hunting pipeline that discovers, evaluates, and prepares personalised applications for data science, AI engineering, and ML engineering roles across the UK, end to end, without manual triage.",
        ghLink: "https://github.com/Viraj97-SL/JobFinder",
      },
    ],
  },
  {
    title: "Applied ML and products",
    description: "Things built to be used by somebody other than me.",
    projects: [
      {
        image: visionaidImg,
        category: "Computer Vision · Assistive AI",
        tags: ["Computer Vision", "AI Agent"],
        title: "VisionAId",
        description: "1st place, Data Science Project Club, University of Hertfordshire. A multi-agent assistive system for visually impaired users, coordinating navigation, vision, and e-commerce agents over a lightweight MCP protocol — Whisper for speech, YOLOv8 and OpenCV for real-time recognition, running fully offline on a Raspberry Pi.",
        ghLink: "https://github.com/Viraj97-SL/VisionAId",
      },
      {
        image: pamoryaImg,
        category: "Multi-Agent · Retail",
        tags: ["LangGraph", "GenAI", "ChromaDB", "Docker"],
        title: "Pamorya AI Commerce & Stylist",
        description: "A multi-agent retail system built on a supervisor-worker LangGraph architecture. Integrates virtual garment try-ons via Docker and FastAPI, grounded in ChromaDB to prevent hallucination, routing intents between sales, data-query, and policy agents.",
        ghLink: "https://github.com/Viraj97-SL/apparel-agent-backend",
        demoLink: "https://apparel-agent-frontend.vercel.app",
      },
      {
        image: cricoracleImg,
        category: "Predictive AI · Sports",
        tags: ["XGBoost", "PyTorch LSTM", "Genetic Algorithms", "FastAPI"],
        title: "CricOracle 2026",
        description: "A T20 World Cup prediction platform. Match outcome probabilities, first-innings score forecasts, and optimal playing XI selection using an ensemble of XGBoost, PyTorch LSTMs, and genetic algorithms, deployed with a FastAPI backend and calibrated inference.",
        ghLink: "https://github.com/Viraj97-SL/CricOracle2026",
      },
      {
        image: massifyxImg,
        category: "Supply Chain Intelligence",
        tags: ["Node.js", "AI Enrichment", "Live Monitoring", "REST API"],
        title: "MassifyX Global",
        description: "A real-time supply chain disruption monitoring platform. Ingests global disruption signals, enriches them with AI-generated analysis, and exposes a read API that powers a live monitor dashboard for logistics and procurement teams.",
        ghLink: "https://github.com/Viraj97-SL/MassifyX_Global",
      },
    ],
  },
  {
    title: "Community and hackathons",
    description: "Weekends, mostly.",
    projects: [
      {
        image: ukomainImg,
        category: "Hackathon Win · Clinical AI",
        tags: ["LangChain", "Clinical AI", "Model Governance", "SHAP / DCA", "Streamlit"],
        title: "UKOMAIN26 Hackathon — Clinical AI",
        description: "Best Multimodal Idea at the MMAI'26 Hackathon (UKOMAIN × UCL East). A full AI governance pipeline for ICU early-warning systems — three competing models triangulated for trust, an explicit MNAR-aware feature for missing clinical notes, a 6-tab evidence dashboard, and a voice-driven ICU nursing monitor powered by a LangChain clinical agent.",
        ghLink: "https://github.com/Viraj97-SL/UKOMAIN26_Hackathon_Clinical",
      },
      {
        image: scopeguardImg,
        category: "Hackathon · London",
        tags: ["Cursor", "Rapid Prototyping", "Hackathon"],
        title: "ScopeGuard",
        description: "Built at the Cursor Hackathon 2026 in London under a tight build window — a rapid-prototyped tool shipped end to end during the live event.",
        ghLink: "https://github.com/Viraj97-SL/ScopeGuard_Cursor-Hackathon-2026",
      },
    ],
  },
];

function Projects() {
  return (
    <>
      <PageHeader
        n="02"
        label="Work"
        description="Research prototypes, production systems, and a few experiments that went nowhere useful but taught me something. Grouped by what they were for."
        avif={headerAvif}
        webp={headerWebp}
      >
        Twelve things I built
      </PageHeader>

      <Container fluid className="project-section">
        <Container>
          {groups.map((group) => (
            <div className="project-group" key={group.title}>
              <h2 className="project-group-title">{group.title}</h2>
              <p className="project-group-description">{group.description}</p>
              <Row style={{ justifyItems: "center", paddingBottom: "10px" }}>
                {group.projects.map((project) => (
                  <Col md={4} className="project-card" key={project.title}>
                    <ProjectCard isBlog={false} {...project} />
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </Container>
    </>
  );
}

export default Projects;
