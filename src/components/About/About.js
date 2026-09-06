import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../common/PageHeader";
import headerAvif from "../../Assets/hero-sphere.avif";
import headerWebp from "../../Assets/hero-sphere.webp";

function About() {
  return (
    <>
      <PageHeader
        n="01"
        label="About"
        avif={headerAvif}
        webp={headerWebp}
        objectPosition="right center"
      >
        Field notes
      </PageHeader>

      <Container className="about-section">
        <p>
          I am an AI and machine learning engineer in London. I came
          here from Sri Lanka for an MSc in Data Science at the
          University of Hertfordshire, and stayed to build.
        </p>

        <p>
          Before that I spent two and a half years at MAS Holdings doing
          operational analytics and supply chain planning. Unglamorous
          work, and the best training I could have had. It taught me
          that a model is worth nothing until somebody downstream can
          act on what it says.
        </p>

        <p>
          My research sits in medical imaging. My MSc work built a
          tri-modal classification framework on the ADNI cohort,
          combining a 3D Swin Transformer with SimCLR-style
          self-supervised pretraining and dual LSTMs under a gated
          fusion layer. The finding that interested me most was a
          negative one: a modality being present in the architecture
          does not mean the network is using it.
        </p>

        <p>
          My production work is agents. MarketForge is a nine-agent
          LangGraph system that scrapes and structures the UK AI job
          market end to end. LangGraph, RAG, FastAPI, PostgreSQL,
          Redis, MLflow, LangSmith, Docker.
        </p>

        <p>
          Outside of that, I volunteer with DataKind UK, mentor through
          Teens in AI, and still read more about supply chain research
          than I probably need to.
        </p>
      </Container>
    </>
  );
}

export default About;
