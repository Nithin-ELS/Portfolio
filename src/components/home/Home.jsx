import { React } from "react";
import TypeWriter from "../typewriter/Typerwriter";
import "./Home.css";
import { Link } from "react-scroll";
 const Home = () =>{
 return (
    <div id="home" style={{animationDelay: "0ms"}}>
       
            <div id="background"></div>
            <div id="mobile-background"></div>
            <div id="tablet-background"></div>
            <div className="home-container ">
                <div className="items">
                    <div>
                        <h1 className="slide-up-animation" style={{animationDelay: "200ms"}}>
                            Hi There👋, <br/>
                        </h1>
                        <h1 className="slide-up-animation" style={{animationDelay: "400ms"}}>
                            I'm <span style={{color:'#F78F8D'}}> Nithin </span><br/>
                        </h1>
                    </div>
                    <div className="slide-up-animation" style={{animationDelay: "600ms"}}>
                        I am a <TypeWriter/>
                    </div>
                    <div id="discover-more-container" className="slide-up-animation" style={{animationDelay: "800ms"}}>                        
                        <div className="discover-more-float">
                        <Link to="about"
                        spy={true}
                        smooth={true}
                        duration={700}
                        offset={-150}>
                            <button id="discover-button">
                                DISCOVER MORE
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>
 );
}

export default Home;