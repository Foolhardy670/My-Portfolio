// About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/_about.scss";
import aboutImg from "../assets/profile.jpg";

function About() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Navigate to contact page
    navigate("/contact");
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
                senior at Weber State University in Ogden, Utah, pursuing a
                Bachelor's degree in Web and User Experience Design. I'm
                dedicated to transforming ideas into impactful, user-centered
                digital experiences through clean, responsive, and accessible
                front-end development. With a strong foundation in HTML, CSS,
                JavaScript, React, and UX/UI design principles, I enjoy building
                interfaces that not only look great but also enhance usability
                and engagement. I'm eager to collaborate with a forward-thinking
                company that values innovation, creativity, and continuous
                learning. If you're looking for someone who is curious,
                detail-oriented, and ready to contribute to meaningful projects,
                let's connect! 🤝
              </p>

              <div className="d-flex gap-3 mt-4 flex-wrap">
                <button className="btn-contact" onClick={handleContactClick}>
                  Contact Me
                </button>
                <a
                  href="https://linkedin.com/in/christian-simpore-b7b38025b/"
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
