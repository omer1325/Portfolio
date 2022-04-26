import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <Link spy={true} to="Navbar" smooth={true}>
          <div className="n-name" style={{ cursor: "pointer" }}>
            Omer
          </div>
        </Link>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Testimonials" smooth={true}>
              <li>Testimonials</li>
            </Link>
            <Link spy={true} to="Works" smooth={true}>
              <li>Works</li>
            </Link>
            <Link spy={true} to="Testimonials" smooth={true}>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
