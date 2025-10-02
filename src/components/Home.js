import React from "react";
import profile from "../assets/profile.jpg"; // use your actual image
import projectImg from "../assets/projects.jpg"; // placeholder

function Home() {
  return (
    <main className="home ">
      <div className="intro card">
        <h2>HI, I'm Christian Simpore</h2>
        <p>
          I am a dedicated Full Stack Developer based in Utah, committed to
          creating websites that deliver exceptional user experiences.
        </p>
        <button className="btn">My Resume</button>
      </div>

      <div className="profile card">
        <img src={profile} alt="Christian Simpore" />
      </div>

      <div className="tech-stack card">
        <h2 className="tech-title">My Tech-Stack</h2>
        <div className="tech-list">
          {[
            { name: "HTML/CSS", width: "95%" },
            { name: "JavaScript", width: "90%" },
            { name: "React", width: "85%" },
            { name: "SQL", width: "80%" },
            { name: "Python", width: "88%" },
            { name: "Sass", width: "82%" },
            { name: "Bootstrap", width: "87%" },
            { name: "Django", width: "75%" },
          ].map((tech, index) => (
            <div className="tech-item" key={index}>
              <div className="tech-bar" style={{ width: tech.width }}></div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="contact card">
        <h2>Get in touch_</h2>
        <p>
          I’m always open to new opportunities and conversations. Reach out!
        </p>
        <ul>
          <li>📞 +1 (240) 505 8123</li>
          <li>📧 konteysimpore@gmail.com</li>
          <li>🔗 github.com</li>
          <li>🔗 linkedin.com</li>
        </ul>
      </div>

      <div className="projects card">
        <img src={projectImg} alt="Projects" />
        <h2>Projects_</h2>
      </div>

      <div className="education card">
        <h2>Education_</h2>
        <p>Weber State University</p>
        <p>Bachelor of Science – Full Stack Web Development.</p>
      </div>
    </main>
  );
}

export default Home;
