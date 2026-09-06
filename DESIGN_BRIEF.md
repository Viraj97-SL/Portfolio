# Content and art direction brief

Read DESIGN_BRIEF.md first. This defines the theme, where each
image goes, and the exact copy. Do not write your own copy.
Do not add sections not listed here.

## Theme: "Field Notes"

A researcher's working record. Warm, analog, quiet, unhurried.
Every visual decision answers to this: does it feel like a field
notebook, or does it feel like a SaaS landing page? If the latter,
it is wrong.

Rules that follow from the theme:
- Nothing glows. No neon, no gradients on text, no glassmorphism.
- Nothing counts up, types itself, or floats. Motion is slow fades
  and small upward drifts only.
- Photography is desaturated and always sits behind a scrim, never
  behind bare text.
- Serif for anything large. Sans for anything small. Never mixed
  within one element.
- Generous empty space. If a section feels sparse, it is correct.

## Section numbering

Every major section gets a two-digit index rendered in the display
serif at roughly 2rem in var(--dim), sitting immediately left of a
10px uppercase label with 0.22em letter-spacing.

  01  ABOUT     02  WORK      03  RESEARCH
  04  RÉSUMÉ    05  SIGNALS   06  CONTACT

## Asset placement

hero-orrery.avif  (the seated figure, brass orrery head, wheat field)
  Homepage hero only. Full-bleed, min-height 100svh, object-position
  center right. All copy sits in the LEFT 45% over a scrim:
  linear-gradient(to right, var(--bg) 0%, var(--bg)/0.55 42%,
  transparent 68%). This image was framed for that layout. Do not
  centre the text over it.

hero-sphere.avif  (standing man holding the illuminated glass sphere)
  About page header ONLY. Crop to 3:1, anchored to the RIGHT so the
  figure stays in frame and the empty left carries the heading.
  This is NOT Viraj. Never label it, never place it near his name,
  never use it as an avatar or an OG image. It is atmosphere.

Remaining panoramic AVIFs map 1:1 to their route headers as named.
Same 3:1 crop, same scrim, same treatment. No exceptions.

## Copy

Use verbatim. Slots marked [[ ]] are for Viraj to fill.

### Homepage hero
  label:  AI / ML ENGINEER · LONDON
  h1:     Viraj Bulugahapitiya
  lede:   I build at both ends of the stack. Research-grade deep
          learning on one side, the agent infrastructure that puts
          it into production on the other.
  cta-1:  See the work
  cta-2:  Get in touch
  scroll cue: a thin 1px vertical rule, 48px, no mouse icon,
          no "scroll" text.

### Homepage intro (replaces Home2 / HomeAbout)
  01  ABOUT
  h2:     Between the paper and the pipeline
  body:   Most AI work sits on one side of a line. Research that
          never ships, or products that never asked whether the
          model was right. I have spent the last few years working
          on both sides of it, and the interesting problems are
          almost always at the seam.
  link:   Read more →

### Homepage facts (replaces BentoGrid)
  Three facts. No icons, no counters, no plus signs.

  MSc Data Science
  University of Hertfordshire

  Supply chain analytics
  2.5 years, MAS Holdings, Sri Lanka

  Currently
  Independent, London. Open to AI/ML engineering roles.

### About page
  header image: hero-sphere.avif
  01  ABOUT
  h1:     Field notes

  p1:  I am an AI and machine learning engineer in London. I came
       here from Sri Lanka for an MSc in Data Science at the
       University of Hertfordshire, and stayed to build.

  p2:  Before that I spent two and a half years at MAS Holdings
       doing operational analytics and supply chain planning.
       Unglamorous work, and the best training I could have had.
       It taught me that a model is worth nothing until somebody
       downstream can act on what it says.

  p3:  My research sits in medical imaging. My MSc work built a
       tri-modal classification framework on the ADNI cohort,
       combining a 3D Swin Transformer with SimCLR-style
       self-supervised pretraining and dual LSTMs under a gated
       fusion layer. The finding that interested me most was a
       negative one: a modality being present in the architecture
       does not mean the network is using it.

  p4:  My production work is agents. MarketForge is a nine-agent
       LangGraph system that scrapes and structures the UK AI job
       market end to end. LangGraph, RAG, FastAPI, PostgreSQL,
       Redis, MLflow, LangSmith, Docker.

  p5:  Outside of that: [[hobbies, one honest line]].

### Work / Projects page
  02  WORK
  h1:     Twelve things I built
  lede:   Research prototypes, production systems, and a few
          experiments that went nowhere useful but taught me
          something. Grouped by what they were for.

  Group headers, each with its 16:9 category image:
    Research and deep learning
      Work where the question mattered more than the product.
    Agentic and multi-agent systems
      Systems that decide what to do next without being told.
    Applied ML and products
      Things built to be used by somebody other than me.
    Community and hackathons
      Weekends, mostly.

### Research page (new route, /research)
  03  RESEARCH
  h1:     Modality present is not modality used
  lede:   MSc research on tri-modal Alzheimer's classification,
          currently being prepared for publication.
  body:   [[one paragraph abstract, plus links to preprint/poster
          when available]]

### Résumé
  04  RÉSUMÉ
  h1:     The short version
  lede:   Full history, or download the PDF.
  cta:    Download CV (PDF)

### Certificates and Achievements
  Merge into one route, /signals.
  05  SIGNALS
  h1:     Certificates, talks and hackathons
  lede:   Evidence, in reverse chronological order.

### Contact
  06  CONTACT
  h1:     Say something
  lede:   I read everything. I reply to most of it.
          Best for: AI/ML engineering roles, research
          collaboration, or anything involving agents.
  form labels: Name / Email / What's on your mind
  submit: Send
  success: Got it. I'll come back to you.
  error:   That didn't send. Try [[email]] directly.

### 404
  image: 404-signpost.avif
  h1:    Nothing here
  body:  The page you wanted does not exist, or I moved it.
  cta:   Back to the start

### Footer
  Viraj Bulugahapitiya · London
  GitHub · LinkedIn · Email
  Built by hand. [[year]].

  Delete any "Made with React" or template attribution.

### Meta (index.html)
  title: Viraj Bulugahapitiya · AI/ML Engineer
  description: AI and machine learning engineer in London.
    Medical imaging research and production multi-agent systems.
  og:image: /og.png (1200x630, orrery hero + name set in
    Instrument Serif, rendered in code not in the generator)

## Delete entirely
- "Hello, World", the wave emoji, the typewriter rotation
- tsparticles and the Particle component
- react-parallax-tilt and all card tilt
- All bento stat tiles with counters ("11+", "3+")
- The .purple class and every #00d2ff literal
- The GitHub contribution calendar (it is a template signature,
  and a sparse one reads worse than no calendar)
- pre.gif and the 1200ms artificial preloader delay

## Text rules
- Sentence case for all headings. No Title Case, no ALL CAPS
  except the 10px labels.
- No exclamation marks anywhere.
- Body copy capped at 65ch.
- First person throughout. Never third person, never "we".
- No word appears that Viraj would not say out loud.

## Acceptance
- Zero placeholder or lorem text in the built output.
- Every [[slot]] either filled or the containing block removed.
- All headings form a valid document outline (one h1 per route).
- Copy renders correctly at 390px with no orphaned single words
  in headings.
