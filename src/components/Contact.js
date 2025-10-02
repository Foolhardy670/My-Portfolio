import React, { useRef } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

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
    <section className="contact-page py-2">
      <Container>
        <div className="text-center mb-5">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-subtitle">
            I'd love to hear about your project and how I can help.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {/* Left: Form */}
          <Col lg={6} md={10}>
            <Card className="contact-card  p-4">
              <h4 className="mb-3">Let’s connect constellations</h4>
              <p className="card-subtext">
                Let’s align our constellations! Reach out and let the magic of
                collaboration illuminate our skies.
              </p>

              <Form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      required
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      required
                    />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Message"
                    required
                  />
                </Form.Group>

                <Button type="submit" className="send-btn px-4 py-2">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>

          {/* Right: Contact Info */}
          <Col lg={4} md={10}>
            <Card className="contact-card p-4 other-ways-card">
              <h5 className="text-center mb-4 other-ways-title">
                Other Ways to Reach Me
              </h5>

              <div className="contact-item d-flex align-items-center mb-4">
                <FaEnvelope className="contact-icon me-3" />
                <span className="contact-text">Konteysimpore@gmail.com</span>
              </div>

              <div className="contact-item d-flex align-items-center mb-4">
                <FaPhone className="contact-icon me-3" />
                <span className="contact-text">+1 (240) 505-8123</span>
              </div>

              <div className="contact-item d-flex align-items-center">
                <FaGithub className="contact-icon me-3" />
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  https://github.com/
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
