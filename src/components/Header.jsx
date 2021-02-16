import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <nav id="menu">
      <ul className="menu-header">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><li>Home</li></Link>
        <Link to="/About" style={{ color: 'inherit', textDecoration: 'none' }}><li>Sobre</li></Link>
      </ul>
      <hr />
    </nav>

  );
}

export default Header;
