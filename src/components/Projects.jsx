import React from "react";
import { data } from "../data/portfolioData";

const Projects = ({ openProjects }) => {
  return (
    <div className="projects">
      <div className="container">
        <header>
          <h1>
            <span>P</span>royectos <span>R</span>ealizados
          </h1>
          <i class="fas fa-times-circle" onClick={openProjects}></i>
          <hr />
        </header>

        <div className="data">
          {data.map((project) => (
            <a href={project.link} target="_blank">
              <figure>
                <img src={project.image} />
                <div class="capa">
                  <h3>{project.title}</h3>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <p>{tag}</p>
                    ))}
                  </div>
                </div>
              </figure>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
