import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, widthVariants } from "./animations";
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
      {/* Intro */}
      <motion.section
        className="intro card p-4 p-md-5 mb-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants} className="fw-bold">
          HI, I'm Christian Simpore
        </motion.h2>
        <motion.p variants={itemVariants}>
          I am a dedicated Full Stack Developer based in Utah, committed to
          creating websites that deliver exceptional user experiences.
        </motion.p>
        <motion.button
          variants={itemVariants}
          className="btn btn-short"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "Christian_Simpore_Resume.pdf";
            link.click();
          }}
        >
          My Resume
        </motion.button>
      </motion.section>

      {/* Profile */}
      <motion.section
        className="profile card p-0 overflow-hidden mb-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.img
          variants={itemVariants}
          src={profile}
          alt="Christian Simpore"
          loading="lazy"
          decoding="async"
          className="w-100"
          style={{ display: "block", objectFit: "cover", maxHeight: 420 }}
        />
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        className="tech-stack card p-4 p-md-5 mb-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 className="tech-title mb-3" variants={itemVariants}>
          My Tech-Stack
        </motion.h2>
        <div className="tech-list">
          {techs.map((tech, i) => (
            <motion.div
              className="tech-item"
              key={i}
              variants={itemVariants}
              style={{ position: "relative" }}
            >
              <motion.div
                className="tech-bar"
                variants={widthVariants(tech.width)}
              />
              <motion.span variants={itemVariants}>{tech.name}</motion.span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="contact card p-4 p-md-5 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants} className="fw-bold">
          Get in touch_
        </motion.h2>
        <motion.p variants={itemVariants}>
          I’m always open to new opportunities and conversations. Reach out!
        </motion.p>
        <motion.ul className="mb-0" variants={containerVariants}>
          {[
            "📞 +1 (240) 505 8123",
            "📧 konteysimpore@gmail.com",
            "🔗 github.com",
            "🔗 linkedin.com",
          ].map((line, idx) => (
            <motion.li key={idx} variants={itemVariants}>
              {line}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Projects promo */}
      <motion.section
        className="projects card overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Link to="/projects">
          <motion.img
            variants={itemVariants}
            src={projectImg}
            alt="Projects"
            loading="lazy"
            decoding="async"
            className="w-100"
            style={{ display: "block", objectFit: "cover", maxHeight: 360 }}
          />
        </Link>
        <motion.h2 className="p-3 fw-bold" variants={itemVariants}>
          Projects_
        </motion.h2>
      </motion.section>

      {/* Education */}
      <motion.section
        className="education card p-4 p-md-5 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants} className="fw-bold">
          Education_
        </motion.h2>
        <motion.p variants={itemVariants} className="fw-bold fst-italic">
          Weber State University
        </motion.p>
        <motion.p variants={itemVariants}>
          Bachelor of Science – Full Stack Web Development.
        </motion.p>
      </motion.section>
    </main>
  );
}

export default Home;
