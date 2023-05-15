import React from "react";
import CV from "../../assets/Ritesh-Shukla-Resume.pdf";

const CTA = () => {
  const handleNewTab = () => {
    window.open(
      "https://drive.google.com/drive/folders/1b_zB5JtaYZeXxA2ORhr1XqevVXjZpEjl?usp=share_link"
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


// const CTA = () => {
//   return (
//     <div class="nav-link resume">

//     <div className='cta'>
//       <div className="nav-link resume" id="resume-button-1">
//       <a href={resume} id="resume-link-1" className='btn' target='_blank' download="Pritam-Halder-Resume" onClick={() =>
//   window.open(
//     "https://drive.google.com/file/d/1DLS0HqF4MBcsZOehqQHw7tvzjIGcAfl1/view?usp=sharing"
//   )
// }>Download Resume</a>
//       </div>
//       <a href="#contact" className='btn btn-primary'>Contact</a>
//     </div>
//     </div>
//   );
// }




// // https://drive.google.com/drive/folders/1k8yTDNPjnhkb1ufp2HdoNTJ5ObkPfqVL?usp=share_link

// import React from "react";
// import CV from "../../assets/Ritesh-Shukla-Resume.pdf";

// const CTA = () => {
//   const handleDownload = () => {
//     window.open("https://drive.google.com/drive/folders/1k8yTDNPjnhkb1ufp2HdoNTJ5ObkPfqVL?usp=share_link", "_blank");
//   };

//   return (
//     <div className="cta">
//       <a href={CV} target="_blank" download={CV} className="btn" onClick={handleDownload}>
//         <span id="resume-button-2">Resume</span>
//       </a>
//       <a href="#contact" className="btn btn-primary">
//         Let's talk
//       </a>
//     </div>
//   );
// };

// export default CTA;
