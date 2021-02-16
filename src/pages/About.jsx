import React from 'react';
import Header from '../components/Header';
import logowhite from '../styles/images/logowhite.png';
import '../App.css';

function About() {
    return (
      <div>
        <img src={ logowhite } alt="logotipo kodokan" className="logo-tipo" />
        <Header />
      </div>
    );
}

export default About;