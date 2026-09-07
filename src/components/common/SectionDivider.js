import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import "./section-divider.css";

/**
 * Full-bleed decorative divider placed BETWEEN sections, never at the top
 * of a route (that's PageHeader's job) and never carrying an h1. Purely
 * punctuation — aria-hidden, empty alt, no accessibility-tree presence.
 *
 * Exactly three instances exist across the site; each route/placement is
 * deliberate — do not reuse one image on a second route.
 */
function SectionDivider({ avif, webp, width, height, caption, heading }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className="section-divider" aria-hidden="true">
      <div className="section-divider-frame">
        <picture>
          <source srcSet={avif} type="image/avif" />
          <source srcSet={webp} type="image/webp" />
          <motion.img
            src={webp}
            alt=""
            width={width}
            height={height}
            loading="lazy"
            fetchpriority="low"
            decoding="async"
            className="section-divider-img media-feather-y media-grade"
            style={prefersReducedMotion ? undefined : { y }}
          />
        </picture>
      </div>
      {heading && <p className="section-divider-heading">{heading}</p>}
      {caption && <p className="section-divider-caption">{caption}</p>}
    </div>
  );
}

export default SectionDivider;
