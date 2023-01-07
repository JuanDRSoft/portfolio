import React from "react";
import "../styles/Home.css";

const About = () => {
  return (
    <div>
      <h1>Hola, mi nombre es Juan Diego Ríos Sáenz</h1>
      <p>
        Me dedico al desarrollo de aplicaciones web (full-stack) y al desarrollo
        de paginas web.
      </p>
      <p>
        Conocimientos en JavaScript, HTML, CSS, Node JS, Express JS, WordPress,
        MongoDB, React JS.
      </p>
      <p>
        No olvide dar un vistazo a mis ultimos proyectos en el{" "}
        <a href="/portfolio" className="link">
          portafolio
        </a>
        .
      </p>
    </div>
  );
};

export default About;
