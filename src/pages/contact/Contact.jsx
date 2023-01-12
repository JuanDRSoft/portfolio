import React, { useState } from "react";
import "../../styles/Contact.css";
import LinkedIn from "../../img/linkedin.png";
import GitHub from "../../img/github.png";
import Gmail from "../../img/gmail.png";
import useProvider from "../../hooks/useProvider";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inPhone, setInPhone] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");

  const { sendEmail } = useProvider();

  const submitMessage = async (e) => {
    e.preventDefault();

    if ([name, phone, inPhone, message, email].includes("")) {
      setNotification({
        msg: "Llena todos los campos correctamente",
        alert: "alert danger",
        active: true,
      });
      setTimeout(() => {
        setNotification({
          msg: "Llena todos los campos correctamente",
          alert: "alert-off danger",
          active: true,
        });
      }, 5000);
      setTimeout(() => {
        setNotification("");
      }, 5800);
      return;
    }

    try {
      sendEmail({ name, email, phone: inPhone + "-" + phone, message });
      setNotification({
        msg: "Mensaje enviado correctamente",
        alert: "alert succes",
        active: true,
      });

      setTimeout(() => {
        setNotification({
          msg: "Mensaje enviado correctamente",
          alert: "alert-off succes",
          active: true,
        });
      }, 5000);

      setTimeout(() => {
        setNotification("");
      }, 5800);

      setEmail("");
      setName("");
      setInPhone("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {notification.active && (
        <div className={`${notification.alert}`}>
          <p>{notification.msg}</p>
        </div>
      )}

      <div className="container">
        <h1>Información De Contacto</h1>
        <p>
          Estoy disponible para que contactes conmigo, si deseas hablar para la
          creación de un proyecto
        </p>
        <p>
          o la colaboración para ejecutarlo, o si solo quieres darme un saludo
          no olvides llenar el siguiente formulario
        </p>

        <form onSubmit={submitMessage}>
          <div>
            <input
              type="text"
              placeholder="Escribe tu nombre"
              style={{ textTransform: "capitalize" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Tú correo electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="tel"
              placeholder="+57"
              style={{ width: "5%", marginRight: 10 }}
              value={inPhone}
              onChange={(e) => setInPhone(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Un número de contacto"
              style={{ width: "32%" }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <textarea
              placeholder="Describe el motivo de tu contacto conmigo..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit">ENVIAR INFORMACIÓN</button>
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
    </>
  );
};

export default Contact;
