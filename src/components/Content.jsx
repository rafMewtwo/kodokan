import React from 'react';
import '../styles/Content.css';
import { Link } from 'react-router-dom';

function Content() {
    return (
      <div  className="content">
        <ul className="list">
        <Link to="/faixabranca" className="text-link" style={{ color: 'inherit', textDecoration: 'none' }}><li className="item-menu">FAIXA BRANCA</li></Link>
          <li className="item-menu">FAIXA AMARELA (em breve)</li>
          <li className="item-menu">FAIXA VERMELHA (em breve)</li>
          <li className="item-menu">FAIXA LARANJA (em breve)</li>
          <li className="item-menu">FAIXA VERDE (em breve)</li>
          <li className="item-menu">FAIXA ROXA (em breve)</li>
          <li className="item-menu">FAIXA MARROM (em breve)</li>
        </ul>
      </div>
    );
}

export default Content;