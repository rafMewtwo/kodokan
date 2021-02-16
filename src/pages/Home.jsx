import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import logowhite from '../styles/images/logowhite.png';
import '../styles/Home.css';

function Home() {
    return (
      <div>
        <img src={ logowhite } alt="logotipo kodokan" className="logo-tipo" />
        <Header />
        <Content />
      </div>
    );
}

export default Home;