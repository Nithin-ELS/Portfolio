import React from "react";
import SkillImg1 from "../../assets/img/HTML.png";
import SkillImg2 from "../../assets/img/CSS.png";
import SkillImg3 from "../../assets/img/react.png";
import SkillImg4 from "../../assets/img/JavaScript.png";
import SkillImg5 from "../../assets/img/angular.png";
import SkillImg6 from "../../assets/img/TypeScript.png";
import SkillImg7 from "../../assets/img/Git.png";
import "./Skills.css";
import { Fade } from "react-awesome-reveal";
const Skills = () => {
  const skillImages = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg5,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg7,
    },
  ];

  return (
    <div id="Skills">
      <div className="skills-image-container">
        <Fade direction="left" cascade triggerOnce={true} delay={0}>
          <div className="skills-grid">
            {skillImages.map((skillImage, index) => {
              return (
                <div className="skill-images" key={index}>
                  <img
                    className="skill-image"
                    src={skillImage.image}
                    alt="skill png"
                  />
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
