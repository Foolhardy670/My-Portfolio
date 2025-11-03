// Home.js
import React from "react";
import profile from "../assets/profile.jpg";
import projectImg from "../assets/projects.jpg";
import { Link } from "react-router-dom";

function Home() {
  const techs = [
    { name: "HTML/CSS", width: "95%" },
    { name: "JavaScript", width: "90%" },
    { name: "React", width: "85%" },
    { name: "SQL", width: "75%" },
    { name: "Python", width: "70%" },
    { name: "Sass", width: "75%" },
    { name: "Bootstrap", width: "92%" },
    { name: "Django", width: "60%" },
  ];

  return (
    <main className="home container py-5">
      <section className="intro card p-4 p-md-5 mb-4 fade-in">
        <h2 className="fw-bold">HI, I'm Christian Simpore</h2>
        <p>
          I am a dedicated Full Stack Developer based in Utah, committed to
          creating websites that deliver exceptional user experiences.
        </p>
        <button
          className="btn btn-short"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "Christian_Simpore_Resume.pdf";
            link.click();
          }}
        >
          My Resume
        </button>
      </section>

      <section className="profile card p-0 overflow-hidden mb-4 fade-in-up">
        <img
          src={profile}
          alt="Christian Simpore"
          loading="lazy"
          decoding="async"
          className="w-100"
          style={{ display: "block", objectFit: "cover", maxHeight: 420 }}
        />
      </section>

      <section className="tech-stack card p-4 p-md-5 mb-4 fade-in-up">
        <h2 className="tech-title mb-3">My Tech-Stack</h2>
        <div className="tech-list">
          {techs.map((tech, i) => (
            <div className="tech-item" key={i}>
              <span>{tech.name}</span>
              <div className="tech-bar-container">
                <div className="tech-bar" style={{ width: tech.width }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact card p-4 p-md-5 fade-in-up">
        <h2 className="fw-bold">Get in touch_</h2>
        <p>
          I'm always open to new opportunities and conversations. Reach out!
        </p>
        <ul className="mb-0">
          {["📞 +1 (240) 505 8123", "📧 konteysimpore@gmail.com"].map(
            (line, idx) => (
              <li key={idx}>{line}</li>
            )
          )}
        </ul>
      </section>

      <section className="projects card overflow-hidden fade-in-up">
        <Link to="/projects">
          <img
            src={projectImg}
            alt="Projects"
            loading="lazy"
            decoding="async"
            className="w-100"
            style={{ display: "block", objectFit: "cover", maxHeight: 360 }}
          />
        </Link>
        <h2 className="p-3 fw-bold">Projects_</h2>
      </section>

      <section className="education card p-4 p-md-5 fade-in-up">
        <h2 className="fw-bold">Education_</h2>
        <p className="fw-bold ">
          Weber State University - <i>Ogden, Utah</i>
        </p>
        <p>
          <span className="fw-bold">Bachelor of Science</span> - Web and User
          Experience Design - Full Stack Web Development
        </p>
      </section>
    </main>
  );
}

export default Home;
