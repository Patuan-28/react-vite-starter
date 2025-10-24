import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ background: '#222', padding: '1rem' }}>
      <ul style={{
        display: 'flex',
        justifyContent: 'center',
        listStyle: 'none',
        gap: '2rem',
        margin: 0,
        padding: 0,
        color: 'white'
      }}>
        <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a></li>
        <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
}
