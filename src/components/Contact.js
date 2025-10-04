import React, { useRef } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animations";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rk20a8b",
        "template_9sh4nmq",
        form.current,
        "WZfneb7qb78y_iTO2"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="contact-page py-5">
      <Container>
        <motion.div
          className="text-center mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2 className="contact-title" variants={itemVariants}>
            Let's Connect
          </motion.h2>
          <motion.p className="contact-subtitle" variants={itemVariants}>
            I'd love to hear about your project and how I can help.
          </motion.p>
        </motion.div>

        <Row className="g-4 justify-content-center">
          {/* Form */}
          <Col lg={6} md={10}>
            <motion.div
              className="contact-card shadow-card p-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.h4 className="mb-3" variants={itemVariants}>
                Let’s connect constellations
              </motion.h4>
              <motion.p className="card-subtext" variants={itemVariants}>
                Let’s align our constellations! Reach out and let the magic of
                collaboration illuminate our skies.
              </motion.p>

              <Form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col md={6} className="mb-3">
                    <motion.div variants={itemVariants}>
                      <Form.Control
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        required
                      />
                    </motion.div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <motion.div variants={itemVariants}>
                      <Form.Control
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        required
                      />
                    </motion.div>
                  </Col>
                </Row>

                <motion.div className="mb-3" variants={itemVariants}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </motion.div>

                <motion.div className="mb-3" variants={itemVariants}>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </motion.div>

                <motion.div className="mb-3" variants={itemVariants}>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Message"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button type="submit" className="send-btn px-4 py-2">
                    Send Message
                  </Button>
                </motion.div>
              </Form>
            </motion.div>
          </Col>

          {/* Other Ways */}
          <Col lg={4} md={10}>
            <motion.div
              className="contact-card shadow-card p-4 other-ways-card"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.h5
                className="text-center mb-4 other-ways-title"
                variants={itemVariants}
              >
                Other Ways to Reach Me
              </motion.h5>

              <motion.div
                className="contact-item d-flex align-items-center mb-4"
                variants={itemVariants}
              >
                <FaEnvelope className="contact-icon me-3" />
                <span className="contact-text">Konteysimpore@gmail.com</span>
              </motion.div>

              <motion.div
                className="contact-item d-flex align-items-center mb-4"
                variants={itemVariants}
              >
                <FaPhone className="contact-icon me-3" />
                <span className="contact-text">+1 (240) 505-8123</span>
              </motion.div>

              <motion.div
                className="contact-item d-flex align-items-center"
                variants={itemVariants}
              >
                <FaGithub className="contact-icon me-3" />
                <a
                  href="https://github.com/Foolhardy670"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  https://github.com/
                </a>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
