import React from "react";
import { dataExperience } from "../data/experienceData";
import { dataEducation } from "../data/experienceData";

const Experience = ({ openExperience }) => {
  return (
    <div className="experiences">
      <div>
        <div className="container">
          <i class="fas fa-times-circle" onClick={openExperience}></i>
          <div className="experience">
            <header>
              <i class="fas fa-briefcase"></i>
              <h1>Experiencia</h1>
            </header>

            <div className="preview">
              {dataExperience.map((experience) => (
                <>
                  <hr />
                  <div className="title">
                    <div>
                      <span className="date">{experience.date}</span>
                      <h2>{experience.work}</h2>
                      <p>{experience.nameCompany}</p>
                    </div>

                    <div className="img">
                      <img src={experience.icon} />
                    </div>
                  </div>
                  <div className="ocupation">
                    <p>{experience.description}</p>
                  </div>
                </>
              ))}
            </div>
          </div>

          <hr className="division-experience" />

          <div className="education">
            <header>
              <i class="fas fa-university"></i>
              <h1>Educación</h1>
            </header>

            <div className="preview">
              {dataEducation.map((experience) => (
                <>
                  <hr />
                  <div className="title">
                    <div>
                      <span className="date">{experience.date}</span>
                      <h2>{experience.study}</h2>
                      <p>{experience.nameCompany}</p>
                    </div>

                    <div className="img">
                      <img src={experience.icon} />
                    </div>
                  </div>
                  <div className="ocupation">
                    <p>{experience.description}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
