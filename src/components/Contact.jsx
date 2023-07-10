import React, { useState } from "react";
import useProvider from "../hooks/useProvider";
import LinkedIn from "../img/linkedin.png";
import GitHub from "../img/github.png";
import Gmail from "../img/gmail.png";

const Contact = ({ openContact }) => {
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

      <div className="contact">
        <div className="container">
          <header>
            <h1>Contacto</h1>
            <i class="fas fa-times-circle" onClick={openContact}></i>
          </header>

          <hr />

          <div>
            <p>
              Si deseas hablar para la creación de un proyecto o la colaboración
              para ejecutarlo.
            </p>

            <form onSubmit={submitMessage}>
              <input
                type="text"
                placeholder="Escribe tu nombre"
                style={{ textTransform: "capitalize" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Tú correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="phone">
                <input
                  type="tel"
                  placeholder="+57"
                  value={inPhone}
                  onChange={(e) => setInPhone(e.target.value)}
                  className="indicative"
                />
                <input
                  type="tel"
                  placeholder="Un número de contacto"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <textarea
                placeholder="Describe el motivo de tu contacto conmigo..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button type="submit">ENVIAR INFORMACIÓN</button>
            </form>
          </div>

          <div className="divisor-social">
            <hr />
            <span>También Estoy En</span>
            <hr />
          </div>

          <div className="social-contact">
            <ul>
              <li>
                <a href="https://wa.link/9mb9f7" target="_blank">
                  <i class="fab fa-whatsapp"></i>
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
                <a href="https://www.instagram.com/juandrsoft/" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="mailto:juandrsoft@gmail.com" target="_blank">
                  <i class="far fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
