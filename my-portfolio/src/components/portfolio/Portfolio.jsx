import React from "react";
import IMG1 from "../../assets/GeekBuying.png";
import IMG2 from "../../assets/IMG2.png";
import IMG4 from "../../assets/IMG4.png";
import AISUMM from "../../assets/AISUMM.png"

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "GeekBuying Clone",
      img: IMG1,
      description:
        "Geekbuying is an e-commerce website that sells electronics, gadgets, home appliances, and fashion items.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://geekbuying-clone-gb.netlify.app/",
      github: "https://github.com/RiteshKumarShukla/GeekBuying-Clone",
    },
    {
      id: 2,
      title: "Sports Wear Delight",
      img: IMG4,
      description:
        "Sports Wear Delight is a clone of www.ems.com. Eastern Mountain Sports is an online retail company offering outdoor gear, apparel, and accessories, as well as helpful resources for outdoor enthusiasts.",
      technologies: "HTML | CSS | JavaScript | ES6",
      link: "https://amazing-concha-0e1468.netlify.app/",
      github: "https://github.com/deepakthecoder1982/shut-point-1924",
    },
    {
      id: 3,
      title: "CraftsVilla",
      img: IMG2,
      description: "Craftsvilla.com is an online marketplace for handmade, ethnic, and      traditional Indian products, including clothing, jewelry, home decor, and accessories",    technologies: "JavaScript | React | Redux",
      link: "https://crafti-mart.netlify.app/",
      github: "https://github.com/RiteshKumarShukla/CraftiMart",
    },
    {
      id: 4,
      title: "AI Summarizer",
      img: AISUMM,
      description: "Our app creates brief summaries of long articles using advanced algorithms. It saves time and helps you understand complex topics more easily.",    
      technologies: "JavaScript | React | TailwindCSS | Redux-Tool Kit | RapidAPI",
      link: "https://ai-article-summarizer-summz.netlify.app/",
      github: "https://github.com/RiteshKumarShukla/AI-Summarizer",
    },
   
  ];

  return (
    <div id="projects">
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <div className="container portfolio__container">
          {soloProjects.map((pro) => (
            <article className="portfolio__item project-card" key={pro.id}>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="portfolio__item-content">
                <h3 className="project-title">{pro.title}</h3>
                <p className="project-description">{pro.description}</p>
                <p className="project-tech-stack">{pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn project-github-link"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary project-deployed-link"
                  rel="noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
