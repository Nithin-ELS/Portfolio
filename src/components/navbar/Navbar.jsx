import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { Fade } from "react-awesome-reveal";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [Bg, setBg] = useState(false);

  const handleNavbarClick = () => {
    setOpen((previous) => !previous);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 || open ? setBg(true) : setBg(false);
    });
  });

  return (
    <>
      <div id="navbar" className={`navbar ${open || Bg? 'scrolled' :''}`}>
        <nav className={open ? "item-container-active" : "item-container"}>
        <Fade direction="down" delay={100} cascade duration={250} triggerOnce="true">
          <ul>
            <li className="navbar-item">
              <Link
                to="home"
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
              <Link
                to="about"
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
              <Link
                to="Skills"
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
              <Link
                to="Projects"
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
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                duration={700}
                offset={-150}
                onClick={closeNavbar}
              >
                Contact
              </Link>
            </li>
          </ul>
          </Fade>
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
};

export default Navbar;
