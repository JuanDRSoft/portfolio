import React from "react";
import { data } from "../data/portfolioData";

const Projects = () => {
  return (
    <div className="container-portfolio">
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
  );
};

export default Projects;
