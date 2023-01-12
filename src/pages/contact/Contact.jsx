import React from "react";
import "../../styles/Contact.css";
import LinkedIn from "../../img/linkedin.png";
import GitHub from "../../img/github.png";
import Gmail from "../../img/gmail.png";

const Contact = () => {
  return (
    <div className="container">
      <h1>Información De Contacto</h1>
      <p>
        Estoy disponible para que contactes conmigo, si deseas hablar para la
        creación de un proyecto
      </p>
      <p>
        o la colaboración para ejecutarlo, o si solo quieres darme un saludo no
        olvides llenar el siguiente formulario
      </p>

      <form>
        <div>
          <input
            type="text"
            placeholder="Escribe tu nombre"
            style={{ textTransform: "capitalize" }}
          />
        </div>

        <div>
          <input type="email" placeholder="Tú correo electronico" />
        </div>

        <div>
          <input
            type="tel"
            placeholder="+57"
            style={{ width: "5%", marginRight: 10 }}
          />
          <input
            type="tel"
            placeholder="Un número de contacto"
            style={{ width: "32%" }}
          />
        </div>

        <div>
          <textarea placeholder="Describe el motivo de tu contacto conmigo..." />
        </div>

        <button>ENVIAR INFORMACIÓN</button>
      </form>

      <div>
        <h2>Otras Redes De Contacto</h2>
        <social>
          <a
            href="https://www.linkedin.com/in/juan-diego-r%C3%ADos-s%C3%A1enz-72662b242/"
            target="_blank"
          >
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a href="https://github.com/JuanDRSoft" target="_blank">
            <img src={GitHub} alt="git" />
          </a>
          <a href="mailto:juandirios2011@gmail.com">
            <img src={Gmail} alt="git" />
          </a>
        </social>
      </div>
    </div>
  );
};

export default Contact;
