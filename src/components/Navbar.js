import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function NavigationBar({ darkMode, toggleDarkMode }) {
  return (
    <Navbar
      expand="lg"
      className={`custom-navbar pt-3 pb-3 ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          [KCS]
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/projects" className="fw-semibold">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="fw-semibold">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="fw-semibold">
              Contact
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
            >
              <FaLinkedin size={22} />
            </a>
            <div className="divider" />
            <button className="dark-toggle-btn" onClick={toggleDarkMode}>
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
