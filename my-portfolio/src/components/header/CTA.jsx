import React from "react";
import CV from "../../assets/Ritesh-Shukla-Resume.pdf";

const CTA = () => {
  const handleNewTab = () => {
    window.open(
      "https://drive.google.com/drive/folders/1b_zB5JtaYZeXxA2ORhr1XqevVXjZpEjl?usp=sharing"
    )
  }
  return (
    <div className="cta">
      <a href={CV} target="_blank" download id="resume-button-2" className="btn" onClick={handleNewTab}>
        <span >Resume</span>
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};


export default CTA;

