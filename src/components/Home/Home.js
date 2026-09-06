import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import HomeIntro from "./HomeIntro";
import HomeFacts from "./HomeFacts";
import Picture from "../common/Picture";
import heroAvif from "../../Assets/hero-orrery.avif";
import heroWebp from "../../Assets/hero-orrery.webp";
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
        <Picture
          avif={heroAvif}
          webp={heroWebp}
          width={1264}
          height={848}
          alt=""
          className="hero-bg"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-scrim" />

        <div className="hero-content">
          <motion.p className="label hero-label" {...reveal(0)}>
            AI / ML ENGINEER · LONDON
          </motion.p>

          <motion.h1 className="hero-name" {...reveal(1)}>
            Viraj Bulugahapitiya
          </motion.h1>

          <motion.p className="hero-statement" {...reveal(2)}>
            I build at both ends of the stack. Research-grade deep
            learning on one side, the agent infrastructure that puts it
            into production on the other.
          </motion.p>

          <motion.div className="hero-cta-group" {...reveal(3)}>
            <Link to="/project" className="hero-cta-primary">
              See the work
            </Link>
            <Link to="/contact" className="hero-cta-ghost">
              Get in touch
            </Link>
          </motion.div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true" />
      </div>

      {/* ══════════════════ 01 ABOUT ══════════════════ */}
      <HomeIntro />

      {/* ══════════════════ FACTS ══════════════════ */}
      <HomeFacts />
    </section>
  );
}

export default Home;
