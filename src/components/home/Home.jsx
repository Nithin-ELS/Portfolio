import { React } from "react";
import TypeWriter from "../typewriter/Typerwriter";
import "./Home.css";
 const Home = () =>{
 return (
    <section id="home">
       
            <div id="background"></div>
            <div id="mobile-background"></div>
            <div id="tablet-background"></div>
            <div className="home-container ">
                <div className="items">
                    <div>
                        <h1 className="slide-up-animation" style={{animationDelay: "200ms"}}>
                            Hi There👋, <br/>
                        </h1>
                        <h1 className="slide-up-animation" style={{animationDelay: "600ms"}}>
                            I'm <span style={{color:'#F78F8D'}}> Nithin </span><br/>
                        </h1>
                    </div>
                    <div className="slide-up-animation" style={{animationDelay: "800ms"}}>
                        I am a <TypeWriter/>
                    </div>
                    <div id="discover-more-container" className="slide-up-animation" style={{animationDelay: "1000ms"}}>                        
                        <div className="discover-more-float">
                        <a href="#about">
                            <button id="discover-button">
                                DISCOVER MORE
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
 );
}

export default Home;