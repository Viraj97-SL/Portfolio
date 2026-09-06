import React from "react";
import { Link } from "react-router-dom";
import "./not-found.css";

function NotFound() {
  return (
    <section className="not-found">
      <h1>Nothing here</h1>
      <p>The page you wanted does not exist, or I moved it.</p>
      <Link to="/" className="hero-cta-ghost">
        Back to the start
      </Link>
    </section>
  );
}

export default NotFound;
