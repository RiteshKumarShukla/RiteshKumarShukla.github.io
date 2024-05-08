import React from "react";
import CV from "../../assets/Ritesh-Shukla-Resume.pdf";

const CTA = () => {
  const handleNewTab = () => {
    window.open(
      "https://drive.google.com/file/d/1id9QumlpIfjkcYw3dEi_EqDN6mmDH7Hc/view"
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

