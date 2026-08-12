import React, { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import { FaTrophy, FaMedal, FaChalkboardTeacher, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsFileEarmarkText, BsImages } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Particle from "../Particle";

import hackathon1 from "../../Assets/Projects/UKOMAIN26_Hackathon1.jpg";
import hackathon2 from "../../Assets/Projects/UKOMAIN26_Hackathon2.gif";
import hackathon3 from "../../Assets/Projects/UKOMAIN26_Hackathon3.jpg";
import mmaiPoster1 from "../../Assets/Projects/UKOMAIN26_Poster1.jpg";
import mmaiPoster2 from "../../Assets/Projects/UKOMAIN26_poster2.jpg";
import mmaiPoster3 from "../../Assets/Projects/UKOMAIN26_poster3.jpg";
import uhds1 from "../../Assets/Projects/UHDS_01.jpg";
import uhds2 from "../../Assets/Projects/UHDS_02.jpg";
import uhds3 from "../../Assets/Projects/UHDS_03.jpg";
import pyws1 from "../../Assets/Projects/Python WS01.jpg";
import pyws2 from "../../Assets/Projects/Python WS02.jpg";
import icml1 from "../../Assets/Projects/ICML26_01.jpg";
import icml2 from "../../Assets/Projects/ICML26_02.jpg";
import icml3 from "../../Assets/Projects/ICML26_03.jpg";

// ─────────────────────────────────────────────────────────────────
// ➕ Add achievements here. `images` accepts one or more photos —
//    cards with multiple photos open a click-through gallery.
// ─────────────────────────────────────────────────────────────────
const achievements = [
  {
    id: 1,
    title: "Best Multimodal Idea — MMAI'26 Hackathon",
    event: 'UKOMAIN × UCL East — Clinical Strand: "Can you trust an AI in the ICU?"',
    date: "2026",
    tag: "Hackathon Win",
    icon: <FaTrophy />,
    color: "#00d2ff",
    images: [hackathon1, hackathon2, hackathon3],
    blurb:
      "Three days at UCL East building a full AI governance pipeline for ICU early-warning systems — three competing models (multimodal fusion, LightGBM, logistic regression) triangulated for trust, an explicit MNAR-aware feature for the ~32% of patients missing clinical notes, and two production UIs: a 6-tab evidence dashboard and a voice-driven ICU nursing monitor with a LangChain clinical agent.",
    credits: "With Yang Chen, Sakib Ahammed & Daria",
    link: "https://github.com/Viraj97-SL/UKOMAIN26_Hackathon_Clinical",
    linkLabel: "View project",
  },
  {
    id: 2,
    title: "Poster Presentation — Fourth Workshop on Multimodal AI",
    event: "UKOMAIN, UCL East, London (MMAI'26)",
    date: "2026",
    tag: "Poster Presentation",
    icon: <BsFileEarmarkText />,
    color: "#9B59B6",
    images: [mmaiPoster1, mmaiPoster2, mmaiPoster3],
    blurb:
      '"A Synergistic Tri-Modal Framework for Alzheimer\'s Disease Diagnosis Using Self-Supervised 3D Swin Transformer and LSTM with Gated Fusion" — 89.66% accuracy, 0.9611 AUC-ROC, and an MCC of 0.8337 on a small, imbalanced 187-subject dataset by fusing MRI, longitudinal clinical scores, and CSF biomarkers through dynamic gated fusion.',
    credits: null,
    link: "https://github.com/Viraj97-SL/Research-Early-prediction-of-Alzheimer-s",
    linkLabel: "View research",
  },
  {
    id: 3,
    title: "1st Place — Data Science Project Club",
    event: "University of Hertfordshire — VisionAId",
    date: "2025",
    tag: "Competition Win",
    icon: <FaMedal />,
    color: "#FF6F00",
    images: [uhds1, uhds2, uhds3],
    blurb:
      "VisionAId — a multi-agent assistive system for visually impaired users, coordinating Navigation, Vision, and E-commerce agents over a lightweight MCP protocol. Whisper for speech, YOLOv8 + OpenCV for real-time object/text/barcode recognition, OSRM/Nominatim for turn-by-turn navigation — running fully offline on a Raspberry Pi.",
    credits: "With Eshan Hirushka",
    link: "https://github.com/Viraj97-SL/VisionAId",
    linkLabel: "View project",
  },
  {
    id: 4,
    title: "Python for Data Storytelling Workshop",
    event: "UCL Social Data Institute — Edinburgh Futures Institute",
    date: "2026",
    tag: "Workshop",
    icon: <FaChalkboardTeacher />,
    color: "#27AE60",
    images: [pyws1, pyws2],
    blurb:
      "Two days on explanatory vs. exploratory visualization, Plotly/Bokeh/Altair, Streamlit dashboards, and ML-driven narratives. Rebuilt my own UK job-market intelligence data as a restrained-design Streamlit dashboard and a D3 scrollytelling piece in the style of the Tampa Bay Times' \"Failure Factories.\"",
    credits: null,
    link: "https://github.com/Viraj97-SL/Data-Storytelling-WorkShop",
    linkLabel: "View workshop repo",
  },
  {
    id: 5,
    title: "Poster Presentation — Pre-ICML London 2026",
    event: "UCL, Great Ormond Street Institute",
    date: "2026",
    tag: "Poster Presentation",
    icon: <BsFileEarmarkText />,
    color: "#E74C3C",
    images: [icml1, icml2, icml3],
    blurb:
      "Presented the tri-modal Alzheimer's diagnosis research (3D Swin Transformer + LSTM + gated fusion) to the London ML community, alongside talks on uncertainty quantification, LLM agent prompt-injection benchmarks, and analytical low-rank attention approximation.",
    credits: null,
    link: "https://github.com/Viraj97-SL/Research-Early-prediction-of-Alzheimer-s",
    linkLabel: "View research",
  },
];

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="ach-lightbox" onClick={onClose}>
      <button className="ach-lightbox-close" onClick={onClose} aria-label="Close">
        <AiOutlineClose />
      </button>

      {images.length > 1 && (
        <button
          className="ach-lightbox-nav ach-lightbox-prev"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous photo"
        >
          <FaChevronLeft />
        </button>
      )}

      <img
        src={images[index]}
        alt={`${index + 1} of ${images.length}`}
        className="ach-lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <button
          className="ach-lightbox-nav ach-lightbox-next"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next photo"
        >
          <FaChevronRight />
        </button>
      )}

      {images.length > 1 && (
        <div className="ach-lightbox-counter">{index + 1} / {images.length}</div>
      )}
    </div>
  );
}

function AchievementCard({ item, onOpenGallery }) {
  return (
    <div className="ach-card" style={{ "--ach-color": item.color }}>
      <div
        className="ach-media"
        onClick={() => onOpenGallery(item.images)}
        role="button"
        tabIndex={0}
      >
        <img src={item.images[0]} alt={item.title} />
        <div className="ach-tag">{item.tag}</div>
        {item.images.length > 1 && (
          <div className="ach-photo-count">
            <BsImages /> {item.images.length}
          </div>
        )}
      </div>

      <div className="ach-body">
        <h4 className="ach-title">{item.title}</h4>
        <p className="ach-event">{item.event}</p>
        <p className="ach-blurb">{item.blurb}</p>
        {item.credits && <p className="ach-credits">{item.credits}</p>}

        <div className="ach-footer">
          <span className="ach-date">{item.date}</span>
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="ach-link"
              onClick={(e) => e.stopPropagation()}
            >
              {item.linkLabel} →
            </a>
          ) : (
            item.linkLabel && <span className="ach-link ach-link-disabled">{item.linkLabel}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function Achievements() {
  const [gallery, setGallery] = useState(null); // { images, index }

  const openGallery = useCallback((images) => setGallery({ images, index: 0 }), []);
  const closeGallery = useCallback(() => setGallery(null), []);
  const prevImage = useCallback(
    () => setGallery((g) => (g ? { ...g, index: (g.index - 1 + g.images.length) % g.images.length } : g)),
    []
  );
  const nextImage = useCallback(
    () => setGallery((g) => (g ? { ...g, index: (g.index + 1) % g.images.length } : g)),
    []
  );

  return (
    <section>
      <Container fluid className="ach-section">
        <Particle />
        <Container>
          <p className="ach-subheading">Wins &amp; Recognition</p>
          <h1 className="ach-heading">
            My <span className="purple">Achievements</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            Hackathon wins, poster presentations, and workshops from the past year.
          </p>

          <div className="ach-grid">
            {achievements.map((item) => (
              <AchievementCard key={item.id} item={item} onOpenGallery={openGallery} />
            ))}
          </div>
        </Container>
      </Container>

      {gallery && (
        <Lightbox
          images={gallery.images}
          index={gallery.index}
          onClose={closeGallery}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}

export default Achievements;
