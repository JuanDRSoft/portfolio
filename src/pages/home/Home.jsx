import React, { useEffect, useState } from "react";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Profile from "../../img/profile.jpg";
import PWEASY from "../../img/easytraining-web.png";
import SOLUTIO from "../../img/solutio-app.png";
import CRIPTOS from "../../img/criptos.png";
import FIVERR from "../../img/fiverr.png";

import { data } from "../../data/portfolioData";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";

const Home = () => {
  const openContact = () => {
    document.querySelector(".contact").classList.toggle("open");
  };

  const openExperience = () => {
    document.querySelector(".experiences").classList.toggle("open");
  };

  const openProjects = () => {
    document.querySelector(".projects").classList.toggle("open");
  };

  const openSkills = () => {
    document.querySelector(".skill").classList.toggle("open");
  };

  return (
    <div className="container">
      <div className="bio">
        <div className="skill-container">
          <div className="contact-home">
            <p>Si se puede imaginar, se puede programar</p>
            <button onClick={openContact}>
              Contactame <i class="fas fa-comments"></i>
            </button>
          </div>

          <div className="skills">
            <div className="years" onClick={openExperience}>
              <div>
                <p>1.5+</p>
                <span>Año de experiencia</span>
              </div>
            </div>

            <div className="project" onClick={openProjects}>
              <div>
                <p>{data.length}+</p>
                <span>Proyectos Realizados</span>
              </div>
            </div>

            <div className="client" onClick={openSkills}>
              <div>
                <p>
                  <i class="fas fa-infinity"></i>
                </p>
                <span>Habilidades</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile">
          <div className="search">
            <p>
              JuanD<span>RSoft</span>
            </p>

            <button>
              Revisar CV <i class="fas fa-download"></i>
            </button>
          </div>

          <div className="description">
            <div className="profile-img">
              <img src={Profile} />
            </div>

            <div className="profile-description">
              <div className="name">
                <p>Name:</p>
                <span>Juan Diego Ríos Sáenz</span>
              </div>

              <div className="from">
                <p>From:</p>
                <span>
                  <a
                    href="https://goo.gl/maps/SWuMKvm2CDB2dCTr5"
                    target="_blank"
                  >
                    Colombia, Armenia
                  </a>
                </span>
              </div>

              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d497.16231173953605!2d-75.68924926665483!3d4.540188198568253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1689021835180!5m2!1ses!2sco"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="social">
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/juandrsoft/"
                      target="_blank"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/juan-diego-r%C3%ADos-s%C3%A1enz-72662b242/"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://es.fiverr.com/juandiegoriossa"
                      target="_blank"
                    >
                      <div className="fiverr">
                        <img src={FIVERR} width={22} />
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCyyyXVHryKVNZwGbERbVDIg"
                      target="_blank"
                    >
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bio-footer">
        <div className="portfolio-list">
          <div>
            <h1>Portafolio</h1>
            <span onClick={openProjects} style={{ cursor: "pointer" }}>
              Ver Todo
            </span>
          </div>

          <div className="list">
            <div onClick={openProjects}>
              <img src={PWEASY} />
              <span>Ver Más</span>
            </div>

            <div onClick={openProjects}>
              <img src={SOLUTIO} />
              <span>Ver Más</span>
            </div>

            <div onClick={openProjects}>
              <img src={CRIPTOS} />
              <span>Ver Más</span>
            </div>
          </div>
        </div>

        <div className="about">
          <div>
            <h1>About</h1>
            <span>Resumen</span>
          </div>

          <div className="about-me">
            <p>
              Hola mi nombre es Juan Diego Ríos Sáenz, Tengo experiencia con
              diseño, creación y personalización de sitios y aplicaciones web
              full stack, me apasiona desarrollar aplicaciones y me gustan los
              retos en la programación. Me mantengo en constante aprendizaje
              para poder brindar lo mejor de mi a la hora de programar.
            </p>
          </div>
        </div>
      </div>

      <Contact openContact={openContact} />
      <Experience openExperience={openExperience} />
      <Projects openProjects={openProjects} />
      <Skills openSkills={openSkills} />
    </div>
  );
};

export default Home;
