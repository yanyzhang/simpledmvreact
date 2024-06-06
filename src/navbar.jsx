import React, { useState } from "react";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav className="navbar">
      <a href="/" className="nav__logo">
        Department of Motor Vehicles
      </a>
      <div className={`nav__links ${menuActive ? "active" : ""}`}>
        <a href="/" className="nav__link" onClick={closeMenu}>
          Licenses, Permits & IDs
        </a>
        <a href="/about" className="nav__link" onClick={closeMenu}>
          Tests
        </a>
        <a href="/services" className="nav__link" onClick={closeMenu}>
          Schedule
        </a>
        <a href="/contact" className="nav__link" onClick={closeMenu}>
          Contact
        </a>
        <a href="/login" className="nav__link" onClick={closeMenu}>
          MyDMV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
