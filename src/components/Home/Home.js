import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Home2 from "./Home2";
import HomeAbout from "./HomeAbout";
import LogoCloud from "../LogoCloud/LogoCloud";
import BentoGrid from "../Bento/BentoGrid";
import "./hero.css";

const EASE = [0.16, 1, 0.3, 1];
const STAGGER = 0.08;

function reveal(index) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay: index * STAGGER },
  };
}

function Home() {
  return (
    <section>
      {/* ══════════════════ HERO ══════════════════ */}
      <div className="hero" id="home">
        <div className="hero-bg-placeholder" />
        <div className="hero-scrim" />

        <div className="hero-content">
          <motion.p className="label hero-label" {...reveal(0)}>
            AI / ML ENGINEER — LONDON
          </motion.p>

          <motion.h1 className="hero-name" {...reveal(1)}>
            Viraj Bulugahapitiya
          </motion.h1>

          <motion.p className="hero-statement" {...reveal(2)}>
            AI Engineer building autonomous multi-agent systems — from data
            pipelines to production.
          </motion.p>

          <motion.div className="hero-cta-group" {...reveal(3)}>
            <Link to="/project" className="hero-cta-primary">
              View My Work →
            </Link>
            <Link to="/contact" className="hero-cta-ghost">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════ LOGO CLOUD ══════════════════ */}
      <LogoCloud />

      {/* ══════════════════ INTRO ══════════════════ */}
      <Home2 />

      {/* ══════════════════ ABOUT PREVIEW ══════════════════ */}
      <HomeAbout />

      {/* ══════════════════ BENTO GRID ══════════════════ */}
      <BentoGrid />
    </section>
  );
}

export default Home;
