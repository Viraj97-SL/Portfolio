import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

// Empty cells must read darker than the page background, not lighter —
// level0 is --bg-elevated (lighter than --bg-base) precisely because an
// empty cell still needs to read as a cell against the section behind it.
const heatmapTheme = {
  level0: "var(--bg-elevated)",
  level1: "rgba(228, 160, 60, 0.22)",
  level2: "rgba(228, 160, 60, 0.42)",
  level3: "rgba(228, 160, 60, 0.68)",
  level4: "var(--accent)",
};

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "var(--text-primary)",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="text-accent">Code</strong>
      </h1>
      <GitHubCalendar
        username="Viraj97-SL"
        blockSize={30}
        blockMargin={10}
        theme={heatmapTheme}
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
