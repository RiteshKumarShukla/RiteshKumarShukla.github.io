import React from "react";
import ME from "../../assets/pi.png";
import "./intro.css";
import { Education } from "../Education/Education";

const Intro = () => {
  return (
    <>
      <section id="about" class="about section">
        <h5>Get to know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" className="home-img" />
            </div>
          </div>
          <div className="about__content">
            <p id="user-detail-intro">
              A dedicated and skilled Full Stack Web Developer with a
              specialization in React, Redux, MongoDB, Express.js & Node.js, 
              committed to staying current with new technologies and industry
              trends. Seeking a dynamic and challenging role in a product-driven
              company that values creativity, collaboration, and professional
              development.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <Education />
    </>
  );
};

export default Intro;
