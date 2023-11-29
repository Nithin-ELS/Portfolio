import React from "react";
import { Link } from "react-scroll";
import './Navbar.css'
 const Navbar = () => {

    return (
    <>
        <div id="navbar" className="navbar scrolled">
        <nav>
          <ul>
            <li>
              <Link to="home"
              spy={true}
              smooth={true}
              duration={700}
              offset={-150}>
                Home
              </Link>
            </li>
            <li>
            <Link to="about"
            spy={true}
            smooth={true}
            duration={700}
            offset={-150}>
              About
              </Link>
            </li>
            <li>
            <Link to="Skills"
            spy={true}
            smooth={true}
            duration={700}
            offset={-150}>
              Skills
              </Link>
            </li>
            <li>
            <Link to="Projects"
            spy={true}
            smooth={true}
            duration={700}
            offset={-150}>
              Projects
              </Link>
            </li>
            <li>
            <Link to="Contacts"
            spy={true}
            smooth={true}
            duration={700}
            offset={-150}>
              Contacts
              </Link>
            </li>
          </ul>
        </nav>            
        </div>
    </>
    );
}

export default Navbar;