// projects.js
import React from "react";
import { FaGithub } from "react-icons/fa";
import projectImg from "../assets/budget.jpg";
import fitfuel from "../assets/fitfuel.jpg";
import weatherapp from "../assets/weather.jpg";
import crud from "../assets/crud.jpg";

const projects = [
  {
    title: "Budget Tracker",
    description:
      "Budget Tracker is a Django-based web application that helps users manage their personal finances. The app allows users to add income and expenses, categorize transactions, and store data in a local database.",
    img: projectImg,
    techStack: ["Python", "Django", "HTML/CSS"],
    github: "https://github.com/Foolhardy670/budget_tracker",
  },
  {
    title: "FitFuel",
    description:
      "FitFuel is a frontend React application focused on health, nutrition, or fitness-related content—designed to deliver diet plans, meal tracking, or fitness recommendations.",
    img: fitfuel,
    techStack: ["React.js", "HTML/CSS", "JavaScript", "Sass"],
    github: "https://github.com/Foolhardy670/fitfuel",
  },
  {
    title: "Weather App",
    description:
      "Weather App is a React-based application designed to fetch and display real-time weather information based on user input using weather API integration.",
    img: weatherapp,
    techStack: ["React.js", "JavaScript", "HTML/CSS", "API Integration"],
    github: "https://github.com/",
  },

  {
    title: "CRUD Application",
    description:
      "A full-stack CRUD (Create, Read, Update, Delete) web application designed for efficient task management and organization. This responsive application allows users to seamlessly create new tasks, view existing ones, edit task details, and delete completed items. Built with a modern tech stack, it features a clean, intuitive user interface with real-time updates and persistent data storage. ",
    img: crud,
    techStack: ["React.js", "Express.js", "HTML/CSS", "Node.js", "MongoDB"],
    github: "https://github.com/Foolhardy670/mycrudapp.git",
  },
];

function Projects() {
  return (
    <main className="projects-page container py-5">
      <div className="row g-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-12 col-md-6 d-flex justify-content-center"
          >
            <div className="project-card card h-100 fade-in-up">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="card-img-top project-img"
              />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title mb-2">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <div className="tech-tags mb-3 mt-3">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button className="btn details-btn btn-sm">Details</button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
