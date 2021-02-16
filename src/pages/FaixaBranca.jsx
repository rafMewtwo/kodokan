import React from 'react';
import '../styles/Faixas.css';
import  heianshodan  from '../styles/faixabranca/1heian-shodan.jpg';
import  gendanbarai from '../styles/faixabranca/2gedan-barai.jpg';
import  ageuke  from '../styles/faixabranca/3age-uke.jpg';
import  shutouke  from '../styles/faixabranca/4shuto-uke.jpg';
import  oizuki  from '../styles/faixabranca/5oi-zuki.jpg';
import  tetsuiuchi  from '../styles/faixabranca/6tetsui-uchi.jpg';
import  zenkutsudachi  from '../styles/faixabranca/7zenkutsu-dachi.jpg';
import  kokutsudachi  from '../styles/faixabranca/8kokutsu-dachi.jpg';

function FaixaBranca() {
    return (
      <div>
        <div className="video">
          <iframe
            title="video"
            width="100%"
            height="360"
            src={ `https://www.youtube.com/embed/Fsk0lDc3MWI` }
            allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture"
            fs="1"
          />
        </div>
        <h2> Heian Shodan – Ilustração de todos Movimentos</h2>
        <img src={ heianshodan } alt="lista de golpes" className="imagem-full"/>
        <div className="icon-golpe-box">
          <h3 className="golpe-nome">Gendan Barai</h3>
          <img src={ gendanbarai } alt="golpe" className="icon-golpe"/>
          <h3 className="golpe-nome">Age Uke</h3>
          <img src={ ageuke } alt="golpe" className="icon-golpe"/>
          <h3 className="golpe-nome">Shuto Uke</h3>
          <img src={ shutouke } alt="golpe" className="icon-golpe"/>
          <h3 className="golpe-nome">Oi Zuki</h3>
          <img src={ oizuki } alt="golpe" className="icon-golpe"/>
          <h3 className="golpe-nome">Tetsui Uchi</h3>
          <img src={ tetsuiuchi } alt="golpe" className="icon-golpe"/>
          <h3 className="golpe-nome">Zenkutsu Dachi</h3>
          <img src={ zenkutsudachi } alt="golpe" className="icon-golpe"/>
          <h3 className="golpe-nome">Kokutsu Dachi</h3>
          <img src={ kokutsudachi } alt="golpe" className="icon-golpe"/>
        </div>
        <p className="rodape">imagens retiradas do site <a href="https://www.karate.art.br/">karate.art</a></p>
      </div>
    );
}

export default FaixaBranca;