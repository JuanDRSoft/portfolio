import React from "react";
import Projects from "../../components/Projects";
import "../../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <div className="container">
      <h1>Portafolio De Desarrollos</h1>
      <p>
        Aqui podras encontrar algunos de los proyectos que he realizado, en
        ellos aplique diferentes tecnologias
      </p>
      <p>
        diferentes tecnologias ( HTML, Node JS, React JS, MongoDB, Tailwind CSS,
        JavaScript, WordPress, CSS )
      </p>

      <Projects />

      <p style={{ marginTop: 50 }}>
        ¿Quieres ponerte en contacto o hablar de un proyecto? No dude en ponerse
      </p>
      <p>
        en contacto conmigo por correo electrónico en{" "}
        <a href="mailto:juandirios2011@gmail.com" className="link">
          juandirios2011@gmail.com
        </a>
      </p>
      <p style={{ paddingBottom: 70 }}>
        o llena el formulario de la pagina de{" "}
        <a href="/contact" className="link">
          contacto.
        </a>
      </p>
    </div>
  );
};

export default Portfolio;
