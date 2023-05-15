import React from 'react';
import './experience.css';
import {FaHtml5,FaReact} from 'react-icons/fa'
import {SiJavascript,SiCss3,SiRedux,SiTypescript,SiGithub,SiChakraui,SiBootstrap,SiExpress,SiPostman,SiNodedotjs,SiMongodb} from 'react-icons/si'

const Experience = () => {
  return (
    <div id="skills">
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details skills-card">
              <FaHtml5 className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">HTML</h4>
            </article>
            <article className="experience__details skills-card">
              <SiCss3 className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">CSS</h4>
            </article>
            <article className="experience__details skills-card">
              <SiJavascript className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">JavaScript</h4>
            </article>
            <article className="experience__details skills-card">
              <FaReact className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">React</h4>
            </article>
            <article className="experience__details skills-card">
              <SiRedux className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">Redux</h4>
            </article>
            <article className="experience__details skills-card">
              <SiTypescript className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">TypeScript</h4>
            </article>
            <article className="experience__details skills-card">
              <SiChakraui className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">Chakra UI</h4>
            </article>
            <article className="experience__details skills-card">
              <SiBootstrap className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">Bootstrap</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details skills-card">
              <SiMongodb className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">MongoDB</h4>
            </article>
            <article className="experience__details skills-card">
              <SiExpress className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">Express</h4>
            </article>
            <article className="experience__details skills-card">
              <SiNodedotjs className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">Node</h4>
            </article>
            <article className="experience__details skills-card">
              <SiPostman className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">Postman</h4>
            </article>
            <article className="experience__details skills-card">
              <SiGithub className="experience__details-icon skills-card-img" />
              <h4 className="skills-card-name">Git/GitHub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Experience



