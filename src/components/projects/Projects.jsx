import React from "react";
import "./Projects.css";
import portfolioImage from "../../assets/img/Portfolio website.jpg";
import ProjectCard from "./Card";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div id="Projects">
      <Fade direction="up" cascade triggerOnce={true} delay={0}>
        <div className="project-header-container">
          <span>TECHNICAL PROJECTS</span>
        </div>
      </Fade>
      <Fade direction="up" cascade triggerOnce={true} delay={200}>
      <div className="projects-container">
        <ProjectCard
          title="Portfolio Website"
          image={portfolioImage}
          repoLink="https://github.com/Nithin-ELS/Portfolio"
          liveLink=""
        />
        <ProjectCard
          title="Core Banking System"
          image={portfolioImage}
          repoLink="https://github.com/Nithin-ELS/CBS"
        />
      </div>
      </Fade>
    </div>
  );
};

export default Projects;
