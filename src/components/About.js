import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animations";
import "../styles/_about.scss";
import aboutImg from "../assets/profile.jpg"; // update to actual image

function About() {
  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="about-section py-5">
      <Container>
        <motion.div
          className="text-center mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2 className="about-title" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.p className="about-subtitle" variants={itemVariants}>
            Get to know more about my background and skills
          </motion.p>
        </motion.div>

        <Row className="align-items-center">
          <Col lg={8} md={12} className="mb-4 mb-lg-0">
            <motion.div
              className="about-card p-4 p-md-5 "
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.h4 className="intro-title" variants={itemVariants}>
                Hello My name is Christian.
              </motion.h4>
              <motion.p className="about-text" variants={itemVariants}>
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
              </motion.p>

              <motion.div
                className="d-flex gap-3 mt-4 flex-wrap"
                variants={containerVariants}
              >
                <motion.button
                  className="btn-contact"
                  onClick={handleContactScroll}
                  variants={itemVariants}
                >
                  Contact Me
                </motion.button>
                <motion.a
                  variants={itemVariants}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-linkedin"
                >
                  LinkedIn
                </motion.a>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={4} md={12} className="text-center">
            <motion.div
              className="about-image-wrapper "
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.img
                variants={itemVariants}
                src={aboutImg}
                alt="Christian"
                loading="lazy"
                decoding="async"
                className="about-image"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
