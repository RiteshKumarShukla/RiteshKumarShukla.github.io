import React, { useState } from "react";
import { FaHome, FaUser, FaEnvelope, FaFolder, FaCode } from "react-icons/fa";
import "./Navbar.css";
import CV from '../../assets/Ritesh-Shukla-Resume.pdf';
import {ImProfile} from "react-icons/im"


const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav className="navbar" id="nav-menu">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#home" className="nav-link home">
            <FaHome className="nav-icon" />
            <span className="link-text">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link about">
            <FaUser className="nav-icon" />
            <span className="link-text">About</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#experience" className="nav-link skills">
            <FaCode className="nav-icon" />
            <span className="link-text">Skills</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" className="nav-link projects">
            <FaFolder className="nav-icon" />
            <span className="link-text">Projects</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link contact">
            <FaEnvelope className="nav-icon" />
            <span className="link-text">Contact</span>
          </a>
        </li>
        <li className="nav-item">
          <a href={CV} download className="nav-link resume" >
            <ImProfile className="nav-icon" />
            <span className="link-text" id="resume-button-1">Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
