import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="navbar-logo">
  <img src="./src/assets/logo-light.png" alt="Logo" />
</div>

        <ul className="navbar-menu">
          <li className="navbar-item">About Us</li>
          <li className="navbar-item">Our Services</li>
          <li className="navbar-item">Work With Us</li>
          <li className="navbar-item">Blog</li>
        </ul>
        <li className="navbar-cta">Get In Touch</li>
      </div>
    </nav>
  );
};

export default Navbar;