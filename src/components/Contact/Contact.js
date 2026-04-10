import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Particle from "../Particle";

// ─────────────────────────────────────────────
// ⚙️  EmailJS setup — fill in your own credentials:
//   1. Create a free account at https://www.emailjs.com
//   2. Add a service (e.g. Gmail) → copy the Service ID
//   3. Create an email template    → copy the Template ID
//   4. Account ▸ API Keys          → copy the Public Key
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

function Contact() {
  const form    = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

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
      <Container fluid className="contact-section">
        <Particle />
        <Container>
          <p className="contact-subheading">Get in Touch</p>
          <h1 className="contact-heading">
            Let's <span className="purple">Connect</span>
          </h1>

          <Row style={{ justifyContent: "center", paddingTop: "20px" }}>

            {/* ── Contact Form ── */}
            <Col md={7} style={{ paddingBottom: "2rem" }}>
              <div className="contact-form-card">
                <form ref={form} onSubmit={handleSubmit}>
                  <input
                    className="contact-input"
                    name="from_name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    className="contact-input"
                    name="reply_to"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                  <textarea
                    className="contact-input contact-textarea"
                    name="message"
                    placeholder="Your Message..."
                    required
                  />
                  <button
                    type="submit"
                    className="contact-send-btn"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send Message →"}
                  </button>

                  {status === "success" && (
                    <p className="contact-success">✓ Message sent! I'll get back to you soon.</p>
                  )}
                  {status === "error" && (
                    <p className="contact-error">
                      ✗ Failed to send. Please email me directly at the address below.
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
                rel="noreferrer"
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
                rel="noreferrer"
                className="contact-info-card"
              >
                <FaLinkedinIn className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">LinkedIn</div>
                  <div className="contact-info-value">linkedin.com/in/viraj97</div>
                </div>
              </a>

              {/* ✏️  Replace with your real email address */}
              <a
                href="mailto:your.email@example.com"
                className="contact-info-card"
              >
                <FaEnvelope className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">your.email@example.com</div>
                </div>
              </a>

              <div className="contact-info-card" style={{ cursor: "default" }}>
                <FaMapMarkerAlt className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">Sri Lanka 🇱🇰</div>
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
