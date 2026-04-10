import React from "react";
import Marquee from "react-fast-marquee";
import { DiPython, DiPostgresql } from "react-icons/di";
import {
  FaBrain, FaNetworkWired, FaDatabase, FaCogs,
  FaChartLine, FaRobot, FaLink, FaFire, FaProjectDiagram,
  FaEye, FaCloud, FaFlask, FaTable, FaLinux,
} from "react-icons/fa";
import { BiLogoDocker, BiLogoGit, BiLogoGithub } from "react-icons/bi";
import { AiFillExperiment } from "react-icons/ai";

const row1 = [
  { name: "Python",           icon: <DiPython />,         color: "#3776AB" },
  { name: "PyTorch",          icon: <FaFire />,           color: "#EE4C2C" },
  { name: "TensorFlow",       icon: <FaProjectDiagram />, color: "#FF6F00" },
  { name: "LangChain",        icon: <FaLink />,           color: "#00d2ff" },
  { name: "Multi-Agent AI",   icon: <FaNetworkWired />,   color: "#9B59B6" },
  { name: "Vector DBs & RAG", icon: <FaDatabase />,       color: "#27AE60" },
  { name: "Computer Vision",  icon: <FaEye />,            color: "#5C3EE8" },
  { name: "Scikit-Learn",     icon: <FaChartLine />,      color: "#F89939" },
  { name: "Neural Networks",  icon: <FaBrain />,          color: "#E74C3C" },
  { name: "LLMOps",           icon: <FaCogs />,           color: "#00d2ff" },
  { name: "Hugging Face",     icon: <FaRobot />,          color: "#FFD21E" },
];

const row2 = [
  { name: "Docker",      icon: <BiLogoDocker />,    color: "#2496ED" },
  { name: "Git",         icon: <BiLogoGit />,       color: "#F05032" },
  { name: "GitHub",      icon: <BiLogoGithub />,    color: "#e0e0e0" },
  { name: "GCP",         icon: <FaCloud />,         color: "#4285F4" },
  { name: "PostgreSQL",  icon: <DiPostgresql />,    color: "#336791" },
  { name: "FastAPI",     icon: <FaFlask />,         color: "#009688" },
  { name: "Pandas",      icon: <FaTable />,         color: "#8B5CF6" },
  { name: "Linux",       icon: <FaLinux />,         color: "#FCC624" },
  { name: "Jupyter",     icon: <AiFillExperiment />,color: "#F37626" },
  { name: "Apache Airflow", icon: <FaNetworkWired />, color: "#017CEE" },
  { name: "PySpark",     icon: <FaDatabase />,      color: "#E25A1C" },
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
