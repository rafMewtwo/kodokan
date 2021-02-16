import React from 'react';
import Header from '../components/Header';
import academia from '../styles/images/academia.jpeg';
import '../styles/About.css';

function About() {
    return (
      <div className="about">
        <img src={ academia } alt="academia interior" className="academia-interior" />
        <Header />
        <div className="staff">
          <h2>Nossa equipe</h2>
          <p>A academia Kodokan de artes-marciais tem disponivél hoje as seguintes modalidades:</p>
          <ul>
            <li className="modalidades">Karate</li>
            <li className="modalidades">Jiu-jitsu</li>
            <li className="modalidades-last">Muay Thai</li>
          </ul>
          <p>Nossa equipe está 100% dedica e comprometida com nossos alunos para uma excelente experencia de aprendizagem.</p>
        </div>
        <div className="contact">
          <h2>Contato</h2>
          <h4>Endereco: Conjunto Guajará 1, We 64 ,Numero 1581</h4>
          <h4>Facebook: @karatekodokan</h4>
          <h4>Instagram: @kodokankarate</h4>
          <h4>Whatsapp: 988886449</h4>
        </div>
      </div>
    );
}

export default About;