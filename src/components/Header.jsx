import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav id="menu">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/About"><li>Sobre</li></Link>
      </ul>
    </nav>

  );
}

export default Header;
