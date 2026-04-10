import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";
import Particle from "../Particle";

// ─────────────────────────────────────────────────────────────────
// ➕  Add your certificates here.
//    • title       — Certificate name
//    • issuer      — Issuing organisation
//    • date        — Month / Year issued (string)
//    • category    — Must match one of the filter categories below
//    • credentialUrl — Link to the credential page (or "#" if none yet)
//    • icon        — Emoji or a character to show on the card
//    • color       — Accent colour for the left border
// ─────────────────────────────────────────────────────────────────
const certificates = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Stanford University",
    date: "2023",
    category: "ML / AI",
    credentialUrl: "#",
    icon: "🧠",
    color: "#00d2ff",
  },
  {
    id: 2,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    category: "ML / AI",
    credentialUrl: "#",
    icon: "🔥",
    color: "#FF6F00",
  },
  {
    id: 3,
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    category: "ML / AI",
    credentialUrl: "#",
    icon: "🤖",
    color: "#9B59B6",
  },
  {
    id: 4,
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2024",
    category: "Cloud",
    credentialUrl: "#",
    icon: "☁️",
    color: "#4285F4",
  },
  {
    id: 5,
    title: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "2024",
    category: "Cloud",
    credentialUrl: "#",
    icon: "⚡",
    color: "#FF9900",
  },
  {
    id: 6,
    title: "Apache Airflow Fundamentals",
    issuer: "Astronomer",
    date: "2024",
    category: "Data Engineering",
    credentialUrl: "#",
    icon: "🌬️",
    color: "#017CEE",
  },
  {
    id: 7,
    title: "Data Engineering with Python",
    issuer: "DataCamp",
    date: "2023",
    category: "Data Engineering",
    credentialUrl: "#",
    icon: "🗄️",
    color: "#27AE60",
  },
  {
    id: 8,
    title: "LangChain & LLM Applications",
    issuer: "DeepLearning.AI",
    date: "2024",
    category: "ML / AI",
    credentialUrl: "#",
    icon: "🔗",
    color: "#E74C3C",
  },
];

const categories = ["All", "ML / AI", "Cloud", "Data Engineering"];

function Certificates() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  return (
    <section>
      <Container fluid className="cert-section">
        <Particle />
        <Container>
          <p className="cert-subheading">Credentials &amp; Achievements</p>
          <h1 className="cert-heading">
            My <span className="purple">Certificates</span>
          </h1>

          {/* Filter bar */}
          <div className="cert-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cert-filter-btn${activeFilter === cat ? " active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Certificate cards */}
          <div className="cert-grid">
            {filtered.map((cert) => (
              <div
                key={cert.id}
                className="cert-card"
                style={{ "--cert-color": cert.color }}
              >
                <div className="cert-icon-wrap">{cert.icon}</div>
                <div className="cert-badge">{cert.category}</div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">Issued {cert.date}</p>
                {cert.credentialUrl !== "#" ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-link"
                  >
                    View Credential&nbsp;
                    <FaExternalLinkAlt style={{ fontSize: "0.65rem" }} />
                  </a>
                ) : (
                  <span className="cert-link" style={{ opacity: 0.35, cursor: "default" }}>
                    Credential link coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Certificates;
