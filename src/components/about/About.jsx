import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div
      id="about"
      className="slide-up-animation"
      style={{ color: "white", animationDelay: "0ms" }}
    >
      <div className="about-container">
        <div className="about-header">ABOUT ME</div>

        <div
          className="slide-up-animation about-wrapper"
          style={{ animationDelay: "200ms" }}
        >
          <div className="about-image"></div>
          <div className="about-content">
            <div>
              Hey there! My name is Nithin Kumar, a Software Engineer with
              experience building full stack web applications with JavaScript,
              React, and Angular. With a cup of coffee in one hand and a
              keyboard under the other, I'm on a mission to turn caffeine into
              code and ideas into interactive experiences.{" "}
            </div>
            <div style={{ paddingTop: "30px" }}>
              {" "}
              I love the entire process of developing creative websites. It
              allows me to create something both beautiful and functional. I
              want to continue improving my skills that can enable me to be more
              creative and be able to build visually appealing websites. <br />
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
          </div>
        </div>
        {/* <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div> */}
      </div>
    </div>
  );
};
