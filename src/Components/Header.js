import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="profile">
        <img alt="profile" className="profile-image" src="/logo2.png" />
        <h3>Satendra Kumar</h3>
      </div>

      {/* Normal Nav Links (Desktop) */}
      <div className="nav-links">
        <HashLink smooth to="/#home" className="headerp">
          Home
        </HashLink>
        <HashLink smooth to="/#portfolio" className="headerp">
          Portfolio
        </HashLink>
        <HashLink smooth to="/#resume" className="headerp">
          Resume
        </HashLink>
        <HashLink smooth to="/#contact" className="headerp">
          Contact
        </HashLink>
        <HashLink smooth to="/#about" className="headerp">
          About Me
        </HashLink>
      </div>

      {/* Hamburger Icon (Mobile only) */}
      <div className="hamburger" onClick={() => setIsOpen(true)}>
        ☰
      </div>

      {/* Slide-in Side Menu (Mobile only) */}
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setIsOpen(false)}>
          ✖
        </div>
        {/* <Link to="/home" className="headerp" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="headerp" onClick={() => setIsOpen(false)}>
          About Me
        </Link>
        <Link
          to="/portfolio"
          className="headerp"
          onClick={() => setIsOpen(false)}
        >
          Portfolio
        </Link>
        <Link to="/resume" className="headerp" onClick={() => setIsOpen(false)}>
          Resume
        </Link>
        <Link
          to="/contact"
          className="headerp"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link> */}
        <HashLink smooth to="/#home" className="headerp">
          Home
        </HashLink>
        <HashLink smooth to="/#portfolio" className="headerp">
          Portfolio
        </HashLink>
        <HashLink smooth to="/#resume" className="headerp">
          Resume
        </HashLink>
        <HashLink smooth to="/#contact" className="headerp">
          Contact
        </HashLink>
        <HashLink smooth to="/#about" className="headerp">
          About Me
        </HashLink>
      </div>
    </div>
  );
};

export default Header;
