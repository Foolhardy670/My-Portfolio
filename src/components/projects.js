import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animations";
import { FaGithub } from "react-icons/fa";
import projectImg from "../assets/budget.jpg";
import fitfuel from "../assets/fitfuel.jpg"
import weatherapp from "../assets/weather.jpg"


const projects = [
  {
    title: "Budget Tracker",
    description:
      "Budget Tracker is a Django-based web application that helps users manage their personal finances. The app allows users to add income and expenses, categorize transactions, and store data in a local database. It uses Django views and templates to render pages and includes core features like forms, models, and a connected SQLite database.",
    img: projectImg,
    techStack: ["Python", "Django", "HTML/CSS"],
    github: "https://github.com/Foolhardy670/budget_tracker",
  },
  {
    title: "FitFuel",
    description:
      "FitFuel is a frontend React application focused on health, nutrition, or fitness-related content—likely designed to deliver diet plans, meal tracking, or fitness recommendations. The project is structured using Create React App, with component-based architecture and routing, indicating scalability for future features like dashboards, meal planning, or user authentication.",
    img: fitfuel,
    techStack: ["React.js", "HTML/CSS", "JavaScript", "Sass"],
    github: "https://github.com/Foolhardy670/fitfuel",
  },
  {
    title: "Weather App",
    description:
      "Weather App is a React-based application designed to fetch and display real-time weather information based on user input. The codebase follows a component-driven structure using Create React App, and likely integrates with a weather API to deliver temperature, conditions, and city weather lookups.",
    img: weatherapp,
    techStack: ["React.js", "JavaScript", "HTML/CSS", "API Integration"],
    github: "https://github.com/",
  },
  {
    title: "Project Title 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    img: projectImg,
    techStack: ["JavaScript", "Sass", "Flask"],
    github: "https://github.com/Foolhardy670/Weather-App.git",
  },
];

function Projects() {
  return (
    <main className="projects-page container py-5">
      <motion.div
        className="row g-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="col-12 col-md-6 d-flex justify-content-center"
            variants={itemVariants}
          >
            <motion.div
              className="project-card card h-100"
              variants={containerVariants}
            >
              <motion.img
                variants={itemVariants}
                src={project.img}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="card-img-top project-img"
              />
              <div className="card-body d-flex flex-column">
                <motion.h3 className="card-title mb-2" variants={itemVariants}>
                  {project.title}
                </motion.h3>
                <motion.p className="card-text" variants={itemVariants}>
                  {project.description}
                </motion.p>
                <motion.div
                  className="tech-tags mb-3 mt-3"
                  variants={containerVariants}
                >
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      variants={itemVariants}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <motion.button
                    className="btn details-btn btn-sm"
                    variants={itemVariants}
                  >
                    Details
                  </motion.button>
                  <motion.a
                    variants={itemVariants}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

export default Projects;
