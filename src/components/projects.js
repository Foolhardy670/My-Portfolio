import React from "react";
import { FaGithub } from "react-icons/fa";
import projectImg from "../assets/projects.jpg";

const projects = [
  {
    title: "Project Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    img: projectImg,
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/",
  },
  {
    title: "Project Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    img: projectImg,
    techStack: ["Django", "PostgreSQL", "Bootstrap"],
    github: "https://github.com/",
  },
  {
    title: "Project Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    img: projectImg,
    techStack: ["Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/",
  },
  {
    title: "Project Title 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    img: projectImg,
    techStack: ["JavaScript", "Sass", "Flask"],
    github: "https://github.com/",
  },
];

function Projects() {
  return (
    <main className="projects-page container py-5">
      <div className="row g-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-12 col-md-6 d-flex justify-content-center project-column"
          >
            <div className="project-card card h-100">
              <img
                src={project.img}
                alt={project.title}
                className="card-img-top"
              />

              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>

                <div className="tech-tags mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="details-btn mt-3">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
