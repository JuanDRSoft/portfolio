import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import LinkedIn from "../img/linkedin.png";
import GitHub from "../img/github.png";

const Layout = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  const load = () => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  };

  return !loading ? (
    <Loading />
  ) : (
    <div>
      {/* <div className="header">
        <div className="social">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/juan-diego-r%C3%ADos-s%C3%A1enz-72662b242/"
            target="_blank"
          >
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a
            className="github"
            href="https://github.com/JuanDRSoft"
            target="_blank"
          >
            <img src={GitHub} alt="git" />
          </a>
        </div>

        <div className="nav-container">
          <NavLink to="/" className="nav" onClick={load}>
            Inicio
          </NavLink>
          <NavLink to="/portfolio" className="nav" onClick={load}>
            Portafolio
          </NavLink>
          <NavLink to="/contact" className="nav" onClick={load}>
            Contacto
          </NavLink>
        </div>
      </div> */}

      <Outlet />
    </div>
  );
};

export default Layout;
