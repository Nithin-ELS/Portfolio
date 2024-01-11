import { React } from "react";
import TypeWriter from "../../utils/Typerwriter";
import "./Home.css";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div id="home">
      <div id="background"></div>
      <div id="mobile-background"></div>
      <div id="tablet-background"></div>
      <div className="home-container ">
        <div className="items">
          <div>
            <Fade direction="up" cascade triggerOnce="true" delay={200}>
              <h1>
                Hi There👋, <br />
              </h1>
            </Fade>
            <Fade direction="up" cascade triggerOnce="true" delay={400}>
              <h1>
                I'm <span style={{ color: "#F78F8D" }}> Nithin </span>
                <br />
              </h1>
            </Fade>
          </div>
          <Fade direction="up" cascade triggerOnce="true" delay={600}>
            <div>
              I am a <TypeWriter />
            </div>
            <div id="discover-more-container">
              <div className="discover-more-float">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={700}
                  offset={-150}
                >
                  <button id="discover-button">DISCOVER MORE</button>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
