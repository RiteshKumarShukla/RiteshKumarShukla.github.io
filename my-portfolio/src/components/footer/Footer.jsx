import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si"
import {AiOutlineMail} from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer>
      <a href="#home" className="footer__logo">
        Ritesh Kumar Shukla
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/riteshkrshukla/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/RiteshKumarShukla"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/ritesh__shukla/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://www.hackerrank.com/riteshshuklagem"
          target="_blank"
          rel="noreferrer"
        >
          <FaHackerrank />
        </a>
        <a href="tel:+918953641329">
          <FiPhoneCall />
        </a>
        <a href="mailto:riteshshuklagem@gmail.com" id="contact-email"><AiOutlineMail/></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Ritesh Kr. Shukla {getYear()}. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
