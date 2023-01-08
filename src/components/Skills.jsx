import React from "react";
import CSS from "../img/css.png";
import HTML from "../img/html.png";
import JAVASCRIPT from "../img/javascript.png";
import MONGO from "../img/mongodb.png";
import REACT from "../img/react.png";
import TAILWIND from "../img/tailwind.png";
import WORDPRESS from "../img/wordpress.png";
import NODE from "../img/nodejs.png";

const Skills = () => {
  return (
    <div className="skills">
      <img src={CSS} className="skills-img" />
      <img src={HTML} className="skills-img" />
      <img src={JAVASCRIPT} className="skills-img" />
      <img src={MONGO} className="skills-img" />
      <img src={NODE} className="skills-img" />
      <img src={REACT} className="skills-img" />
      <img src={TAILWIND} className="skills-img" />
      <img src={WORDPRESS} className="skills-img" />
    </div>
  );
};

export default Skills;
