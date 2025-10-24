import React from 'react';
import '../Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo"><a>logo</a></h1>
        <ul className="navbar-links">
          <li>Edward</li>
          <li>Justinus</li>
          <li>Patuan</li>
        </ul>
      </div>
    </nav>
  );
}
