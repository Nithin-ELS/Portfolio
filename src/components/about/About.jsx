import React from "react";
import "./About.css";
import { Fade } from "react-awesome-reveal";
export const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <br />

        <Fade direction="up" cascade triggerOnce="true">
          <div className="about-header">ABOUT ME</div>
        </Fade>
        <div className="about-wrapper">
          <Fade direction="up" cascade triggerOnce="true" delay={0}>
            <div className="about-image"></div>
          </Fade>
          <div className="about-content">
            <Fade direction="up" cascade triggerOnce="true" delay={0}>
              <div>
                Hey there! My name is Nithin Kumar, a Software Engineer with
                experience building full stack web applications with JavaScript,
                React, and Angular. With a cup of coffee in one hand and a
                keyboard under the other, I'm on a mission to turn caffeine into
                code and ideas into interactive experiences.{" "}
              </div>
            </Fade>
            <Fade direction="up" cascade triggerOnce="true" delay={100}>
              <div style={{ paddingTop: "30px" }}>
                {" "}
                I love the entire process of developing creative websites. It
                allows me to create something both beautiful and functional. I
                want to continue improving my skills that can enable me to be
                more creative and be able to build visually appealing websites.{" "}
                <br />
                <div style={{ paddingTop: "30px" }}>
                  Here are a few technologies I’ve been working with recently:
                </div>
              </div>
              <span className="about-skills">
                <ul>
                  <li className="about-skills">
                    <span>▸</span>JavaScript
                  </li>
                  <li className="about-skills">
                    <span>▸</span>React.JS
                  </li>
                  <li className="about-skills">
                    <span>▸</span>Java
                  </li>
                  <li className="about-skills">
                    <span>▸</span>Angular
                  </li>
                  <li className="about-skills">
                    <span>▸</span>TypeScript
                  </li>
                </ul>
              </span>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
