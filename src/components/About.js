// About.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/_about.scss";
import aboutImg from "../assets/profile.jpg";

function About() {
  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="about-section py-5">
      <Container>
        <div className="text-center mb-5 fade-in">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
            Get to know more about my background and skills
          </p>
        </div>

        <Row className="align-items-center">
          <Col lg={8} md={12} className="mb-4 mb-lg-0">
            <div className="about-card p-4 p-md-5 fade-in-up">
              <h4 className="intro-title">Hello My name is Christian.</h4>
              <p className="about-text">
                Hello World! 🌍 I'm Christian Simpore, a passionate and driven
                undergraduate student at Weber State University in the vibrant
                city of Ogden, Utah. As a senior pursuing a degree in web
                development, I'm on a mission to turn my love for technology
                into impact solutions that make a difference. I'm excited to
                take the next big leap in my journey and partner with a
                forward-thinking company that values innovation, collaboration,
                and growth. If you're looking for someone who's enthusiastic,
                curious, and ready to contribute to meaningful projects, let's
                connect! 🤝 Feel free to reach out via the contact form below or
                check out my work and connect with me here:
              </p>

              <div className="d-flex gap-3 mt-4 flex-wrap">
                <button className="btn-contact" onClick={handleContactScroll}>
                  Contact Me
                </button>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-linkedin"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Col>

          <Col lg={4} md={12} className="text-center">
            <div className="about-image-wrapper fade-in-up">
              <img
                src={aboutImg}
                alt="Christian"
                loading="lazy"
                decoding="async"
                className="about-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
