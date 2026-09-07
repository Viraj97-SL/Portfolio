import React from "react";
import Marquee from "react-fast-marquee";
import {
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn,
  SiDocker, SiGit, SiGithub, SiGooglecloud, SiPostgresql,
  SiFastapi, SiPandas, SiLinux, SiJupyter, SiApacheairflow,
  SiApachespark,
} from "react-icons/si";
import {
  FaNetworkWired, FaDatabase, FaCogs, FaRobot, FaLink, FaEye, FaBrain,
} from "react-icons/fa";

// Real, recognizable third-party marks keep their true brand colour —
// that's the point of a "powered by" strip. Everything else (a Font
// Awesome glyph standing in for a concept with no single owning brand,
// e.g. "Multi-Agent AI") follows the site's own palette instead.
const row1 = [
  { name: "Python",           icon: <SiPython />,       color: "#3776AB" },
  { name: "PyTorch",          icon: <SiPytorch />,      color: "#EE4C2C" },
  { name: "TensorFlow",       icon: <SiTensorflow />,   color: "#FF6F00" },
  { name: "LangChain",        icon: <FaLink />,         color: "var(--accent)" },
  { name: "Multi-Agent AI",   icon: <FaNetworkWired />, color: "var(--text-secondary)" },
  { name: "Vector DBs & RAG", icon: <FaDatabase />,     color: "var(--accent-dim)" },
  { name: "Computer Vision",  icon: <FaEye />,          color: "var(--text-secondary)" },
  { name: "Scikit-Learn",     icon: <SiScikitlearn />,  color: "#F89939" },
  { name: "Neural Networks",  icon: <FaBrain />,        color: "var(--accent-dim)" },
  { name: "LLMOps",           icon: <FaCogs />,         color: "var(--text-secondary)" },
  { name: "Hugging Face",     icon: <FaRobot />,        color: "var(--accent-bright)" },
];

const row2 = [
  { name: "Docker",         icon: <SiDocker />,       color: "#2496ED" },
  { name: "Git",            icon: <SiGit />,          color: "#F05032" },
  { name: "GitHub",         icon: <SiGithub />,       color: "var(--text-primary)" },
  { name: "GCP",            icon: <SiGooglecloud />,  color: "#4285F4" },
  { name: "PostgreSQL",     icon: <SiPostgresql />,   color: "#336791" },
  { name: "FastAPI",        icon: <SiFastapi />,      color: "#009688" },
  { name: "Pandas",         icon: <SiPandas />,       color: "var(--text-primary)" },
  { name: "Linux",          icon: <SiLinux />,        color: "var(--text-primary)" },
  { name: "Jupyter",        icon: <SiJupyter />,      color: "#F37626" },
  { name: "Apache Airflow", icon: <SiApacheairflow />, color: "#017CEE" },
  { name: "PySpark",        icon: <SiApachespark />,  color: "#E25A1C" },
];

function LogoCloud() {
  return (
    <div className="logo-cloud-section">
      <p className="logo-cloud-label">Powered by</p>

      <Marquee speed={45} gradient={false} pauseOnHover>
        {row1.map((item, i) => (
          <div key={i} className="logo-item">
            <span className="logo-item-icon" style={{ color: item.color }}>
              {item.icon}
            </span>
            <span>{item.name}</span>
          </div>
        ))}
      </Marquee>

      <div style={{ marginTop: "12px" }}>
        <Marquee speed={40} gradient={false} direction="right" pauseOnHover>
          {row2.map((item, i) => (
            <div key={i} className="logo-item">
              <span className="logo-item-icon" style={{ color: item.color }}>
                {item.icon}
              </span>
              <span>{item.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default LogoCloud;
