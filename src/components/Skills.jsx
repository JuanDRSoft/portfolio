import React from "react";
import CSS from "../img/css.png";
import HTML from "../img/html.png";
import JAVASCRIPT from "../img/javascript.png";
import MONGO from "../img/mongodb.png";
import REACT from "../img/react.png";
import TAILWIND from "../img/tailwind.png";
import WORDPRESS from "../img/wordpress.png";
import NODE from "../img/nodejs.png";
import GIT from "../img/Git.png";
import GITHUB from "../img/github.png";
import FIREBASE from "../img/firebase.png";
import SQL from "../img/sql.png";

const conocimientos = [
  "React JS",
  "Node JS",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "Wordpress",
];

const Skills = ({ openSkills }) => {
  return (
    <div className="skill">
      {/* <img src={CSS} className="skills-img" />
      <img src={HTML} className="skills-img" />
      <img src={JAVASCRIPT} className="skills-img" />
      <img src={MONGO} className="skills-img" />
      <img src={NODE} className="skills-img" />
      <img src={REACT} className="skills-img" />
      <img src={TAILWIND} className="skills-img" />
      <img src={WORDPRESS} className="skills-img" /> */}
      <div className="container">
        <header>
          <h1>
            <span>H</span>abilidades
          </h1>
          <i class="fas fa-times-circle" onClick={openSkills}></i>
          <hr />
        </header>

        <div className="body">
          <div className="column">
            <div className="coding">
              <header>
                <i class="fas fa-code"></i>
                <h2>Coding</h2>
              </header>

              <hr />

              <ul>
                {conocimientos.map((e) => (
                  <li>
                    <i class="fas fa-check"></i>
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="division-1" />

            <div className="idiom">
              <header>
                <i class="fas fa-language"></i>
                <h2>Idiomas</h2>
              </header>

              <hr />

              <ul>
                <li>
                  <p>Español</p>
                  <div>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                    <span>Nativo</span>
                  </div>
                </li>

                <li>
                  <p>Ingles</p>
                  <div>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                    <i class="far fa-circle"></i>
                    <i class="far fa-circle"></i>
                    <i class="far fa-circle"></i>
                    <span>B1</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div className="design">
              <header>
                <i class="fas fa-pencil-ruler"></i>
                <h2>Diseño</h2>
              </header>

              <hr />

              <ul>
                <li>
                  <p>Web Design</p>
                  <input className="wb-d" disabled />
                </li>
                <li>
                  <p>Photoshop</p>
                  <input className="ph" disabled />
                </li>
                <li>
                  <p>Adobe Illustrator</p>
                  <input className="ai" disabled />
                </li>
                <li>
                  <p>Edición de video</p>
                  <input className="ev" disabled />
                </li>
              </ul>
            </div>

            <hr className="division-2" />

            <div className="knowledge">
              <header>
                <i class="fas fa-brain"></i>
                <h2>Conocimientos</h2>
              </header>

              <hr />

              <div>
                <img src={CSS} className="skills-img" />
                <img src={HTML} className="skills-img" />
                <img src={JAVASCRIPT} className="skills-img" />
                <img src={MONGO} className="skills-img" />
                <img src={NODE} className="skills-img" />
                <img src={REACT} className="skills-img" />
                <img src={TAILWIND} className="skills-img" />
                <img src={WORDPRESS} className="skills-img" />
                <img src={GIT} className="skills-img" />
                <img src={GITHUB} className="skills-img" />
                <img src={FIREBASE} className="skills-img" />
                <img src={SQL} className="skills-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
