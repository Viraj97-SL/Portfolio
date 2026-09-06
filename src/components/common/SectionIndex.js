import React from "react";
import "./section-index.css";

// "01  ABOUT" — two-digit serif index beside a 10px uppercase label.
function SectionIndex({ n, label, className = "" }) {
  return (
    <div className={`section-index ${className}`}>
      <span className="section-index-number">{n}</span>
      <span className="label">{label}</span>
    </div>
  );
}

export default SectionIndex;
