import React, { useEffect, useState } from "react";
import About from "../../components/About";
import Profile from "../../img/profile.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="image-up">
        <div class="avatar">
          <img src={Profile} alt="profile" />
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
