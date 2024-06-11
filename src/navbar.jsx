import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="nav__logo">
        Department of Motor Vehicles
      </a>
      <div className="nav__links">
        <a href="/" className="nav__link">
          Licenses, Permits & IDs
        </a>
        <a href="/about" className="nav__link">
          Tests
        </a>
        <a href="/services" className="nav__link">
          Schedule
        </a>
        <a href="/contact" className="nav__link">
          Contact
        </a>
        <a href="/login" className="nav__link">
          MyDMV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
