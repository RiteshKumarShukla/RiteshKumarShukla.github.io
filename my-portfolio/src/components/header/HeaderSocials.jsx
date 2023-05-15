import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub} from 'react-icons/fa';
// / import {SiLeetcode} from 'react-ic/ons/si';
import {FiPhoneCall} from 'react-icons/fi';
import {AiOutlineMail} from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/riteshkrshukla/" id="contact-linkedin" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/RiteshKumarShukla" id="contact-github" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="tel:+918953641329"  id="contact-phone">
      <FiPhoneCall/> </a>
      <a href="mailto:riteshshuklagem@gmail.com" id="contact-email"><AiOutlineMail/></a>
    </div>
  )
}

export default HeaderSocials