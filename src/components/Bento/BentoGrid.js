import React from "react";
import { Container } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoGithub } from "react-icons/bi";
import { FaRocket, FaBrain, FaCode } from "react-icons/fa";

function BentoGrid() {
  return (
    <section className="bento-section">
      <Container>
        <p className="bento-section-subtitle">At a glance</p>
        <h2 className="bento-section-title">
          The <span>Numbers</span> Tell the Story
        </h2>

        <div className="bento-grid">

          {/* Bio tile — spans 2 cols */}
          <div className="bento-tile bento-span-2">
            <div className="bento-tile-label">MISSION</div>
            <h3 className="bento-bio-title">Building Tomorrow's AI Systems</h3>
            <p className="bento-bio-text">
              From raw data pipelines to production-grade autonomous agents — I engineer
              AI systems that bridge research and real-world impact. Specialising in
              multi-agent architectures, deep learning, and scalable data infrastructure.
            </p>
            <div style={{ marginTop: "1.25rem" }}>
              <span className="bento-tag">LangGraph</span>
              <span className="bento-tag">RAG Systems</span>
              <span className="bento-tag">LLMOps</span>
              <span className="bento-tag">PyTorch</span>
              <span className="bento-tag">GCP</span>
              <span className="bento-tag">Docker</span>
            </div>
          </div>

          {/* Projects stat */}
          <div className="bento-tile">
            <div className="bento-stat-icon">
              <FaRocket style={{ color: "#00d2ff" }} />
            </div>
            <div className="bento-stat-value">6+</div>
            <div className="bento-stat-label">AI Projects Built</div>
          </div>

          {/* Experience stat */}
          <div className="bento-tile">
            <div className="bento-stat-icon">
              <FaBrain style={{ color: "#9B59B6" }} />
            </div>
            <div className="bento-stat-value">3+</div>
            <div className="bento-stat-label">Years in AI / ML</div>
          </div>

          {/* Tech count stat */}
          <div className="bento-tile">
            <div className="bento-stat-icon">
              <FaCode style={{ color: "#27AE60" }} />
            </div>
            <div className="bento-stat-value">20+</div>
            <div className="bento-stat-label">Technologies Mastered</div>
          </div>

          {/* GitHub tile — spans 2 */}
          <div className="bento-tile bento-span-2">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <BiLogoGithub style={{ fontSize: "2.2rem", color: "#00d2ff" }} />
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "1rem" }}>
                  GitHub Activity
                </div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem" }}>
                  Open-source contributions
                </div>
              </div>
            </div>
            <p className="bento-bio-text">
              Actively building and maintaining AI/ML projects, frameworks, and research tools
              in public repositories — from multi-agent systems to computer vision pipelines.
            </p>
            <a
              href="https://github.com/Viraj97-SL"
              target="_blank"
              rel="noreferrer"
              className="bento-gh-link"
            >
              <AiFillGithub /> View GitHub Profile →
            </a>
          </div>

          {/* Status tile */}
          <div className="bento-tile">
            <div style={{ marginBottom: "0.75rem" }}>
              <span className="bento-status-dot" />
              <span className="bento-status-text">Available</span>
            </div>
            <p className="bento-bio-text" style={{ fontSize: "0.82rem" }}>
              Open to exciting AI Engineering roles, research collaborations, and
              freelance projects.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default BentoGrid;
