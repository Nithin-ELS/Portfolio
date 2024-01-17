import React from "react";

const ProjectCard = ({title, image, repoLink, liveLink}) => {
  return (
    <div>
      <div className="projects-card">
        <img src={image} alt="" className="project-image" />
        <div className="project-gradient" />
        <div className="project-content-container">
          <div className="project-title">
            <h1>{title}</h1>
          </div>
          <div className="divider" />
          <div className="project-links">
            <a href={repoLink} target="_blank" rel="noreferrer">
              <div className="project-repo">
                <span>Repo</span>
              </div>
            </a>
            {liveLink && <a href={liveLink} target="_blank" rel="noreferrer">
              <div className="project-live">
                <span>Live</span>
              </div>
            </a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
