import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import PageHeader from "../common/PageHeader";
import headerAvif from "../../Assets/PageHeaders/contact.avif";
import headerWebp from "../../Assets/PageHeaders/contact.webp";

// ─────────────────────────────────────────────
// ⚙️  EmailJS setup
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

function Contact() {
  const form    = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section>
      <PageHeader
        n="06"
        label="Contact"
        description="I read everything. I reply to most of it. Best for: AI/ML engineering roles, research collaboration, or anything involving agents."
        avif={headerAvif}
        webp={headerWebp}
      >
        Say something
      </PageHeader>

      <Container fluid className="contact-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingTop: "20px" }}>

            {/* ── Contact Form ── */}
            <Col md={7} style={{ paddingBottom: "2rem" }}>
              <div className="contact-form-card">
                <form ref={form} onSubmit={handleSubmit}>
                  <input
                    className="contact-input"
                    name="from_name"
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="contact-input"
                    name="reply_to"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    className="contact-input contact-textarea"
                    name="message"
                    placeholder="What's on your mind"
                    required
                  />
                  <button
                    type="submit"
                    className="contact-send-btn"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending" : "Send"}
                  </button>

                  {status === "success" && (
                    <p className="contact-success">Got it. I'll come back to you.</p>
                  )}
                  {status === "error" && (
                    <p className="contact-error">
                      That didn't send. Try amanthavirajavb@gmail.com directly.
                    </p>
                  )}
                </form>
              </div>
            </Col>

            {/* ── Info Cards ── */}
            <Col md={4} style={{ paddingLeft: "1.5rem" }}>
              <a
                href="https://github.com/Viraj97-SL"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
              >
                <AiFillGithub className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">GitHub</div>
                  <div className="contact-info-value">Viraj97-SL</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/viraj97"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
              >
                <FaLinkedinIn className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">LinkedIn</div>
                  <div className="contact-info-value">linkedin.com/in/viraj97</div>
                </div>
              </a>

              {/* Added mailto: prefix to correctly trigger email client */}
              <a
                href="mailto:amanthavirajavb@gmail.com"
                className="contact-info-card"
              >
                <FaEnvelope className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">amanthavirajavb@gmail.com</div>
                </div>
              </a>

              <div className="contact-info-card" style={{ cursor: "default" }}>
                <FaMapMarkerAlt className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">London, UK</div>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;