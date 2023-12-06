import React, { useState } from "react";
import { Link } from "react-scroll";
import './Navbar.css'
 const Navbar = () => {
    const [open,setOpen] = useState(false);

    const handleNavbarClick = () => {
      setOpen(previous => !previous)
    };

    const closeNavbar = () => {
      setOpen(false);
    };

    return (
    <>
        <div id="navbar" className="navbar scrolled">
        <nav className={open ? "item-container-active": "item-container" }>
          <ul>
            <li className="navbar-item">
              <Link to="home"
              spy={true}
              smooth={true}
              duration={700}
              offset={-150}
              onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li className="navbar-item">
            <Link to="about"
            spy={true}
            smooth={true}
            duration={700}
            offset={-150}
            onClick={closeNavbar}
            >
              About
              </Link>
            </li>
            <li className="navbar-item">
            <Link to="Skills"
            spy={true}
            smooth={true}
            duration={700}
            offset={-150}
            onClick={closeNavbar}
            >
              Skills
              </Link>
            </li>
            <li className="navbar-item">
            <Link to="Projects"
            spy={true}
            smooth={true}
            duration={700}
            offset={-150}
            onClick={closeNavbar}
            >
              Projects
              </Link>
            </li>
            <li className="navbar-item">
            <Link to="Contacts"
            spy={true}
            smooth={true}
            duration={700}
            offset={-150}
            onClick={closeNavbar}
            >
              Contacts
              </Link>
            </li>
          </ul>
        </nav> 
        <div
            className={open ? "hamburger active" : "hamburger"}
            onClick={handleNavbarClick}
          >
            <ul>
              <li className="line"></li>
              <li className="line"></li>
              <li className="line"></li>
            </ul>
          </div>           
        </div>
    </>
    );
}

export default Navbar;