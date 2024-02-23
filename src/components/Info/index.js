import React, { useState } from "react";
import Countdown from 'react-countdown';
import michele from './../../assets/img/michele.png'
import { FlapDisplay, Presets } from 'react-split-flap-effect'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import 'react-split-flap-effect/extras/themes.css'
import './info.scss';

import HospedagemSection from '../Hospedagem';

const images = [
  "https://i.imgur.com/gJZVJYa.jpg",
  "https://i.imgur.com/lwpJRwl.jpg",
  "https://i.imgur.com/rukEBPv.jpg",
  "https://i.imgur.com/fcPcNA9.jpg",
  "https://i.imgur.com/MZuGgNb.jpg",
  "https://i.imgur.com/lNDN3DV.jpg",
  "https://i.imgur.com/fCli5D1.jpg"
]

export default function Info({isMobile}){
  
    const Completionist = () => <span className="cormorant">É hoje!</span>;
    const renderFlap = (number, digits, timing) => <FlapDisplay
      className={`${isMobile ? 'L' : 'XL'} lightBordered flap`}
      length={digits}
      timing={timing}
      chars={Presets.ALPHANUM + ',!'}
      value={`${number}`}
      hinge={false}
      padChar={'0'}
    />;

    const renderer = (data) => {
      let { days, hours, minutes, seconds, completed } = data;
      if (completed) {
          return <Completionist />;
        } else {
            return (
              <div className="countdown-wrapper">
                <span className="cormorant">
                  {renderFlap(days, 3, 10)}
                  dias
                </span>
                <span className="cormorant">
                  {renderFlap(hours, 2, 10)}
                  horas
                </span>
                <span className="cormorant">
                  {renderFlap(minutes, 2, 10)}
                  minutos
                </span>
                { !isMobile ? <span className="cormorant">
                  {renderFlap(seconds, 2, 5)}
                  segundos
                </span> : null }
              </div>
            )
        }
      };

    return (
      <>
          <section id="informacoes" className="section center">
              <h1 className="cormorant center">Informações</h1>
              <h3 className="countdown-title cormorant">Contagem Regressiva para o grande dia</h3>
              <Countdown 
                  date={"2024-06-01T17:30:00"} 
                  renderer={renderer}
              />
          </section>
          <section id="mapa" className="section center">
              <h1 className="cormorant center">Local</h1>
              <h3 className="countdown-title cormorant">Endereço e como chegar no local do evento</h3>
              <div className="flex center">
                <img className="michele" src={michele} />
                <div className="flex col michele-wrapper" style={{ textAlign: 'left', fontSize: '120%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <h3 className="cormorant">Espaço Michele de Moraes</h3>
                  <p className="cormorant">
                    Rua Padre Geraldo Spettmann, 639 - Humaitá, Tubarão - SC
                  </p>
                  <a className="btn cormorant" href="https://maps.app.goo.gl/VkvuYZnrRp5ozWqJA">
                    Abrir Local no Mapa
                  </a>
                </div>
              </div>
          </section>
          <HospedagemSection />
          <section id="galeria">
            <h1 className="cormorant center mt">Galeria</h1>
            <h3 className="countdown-title cormorant">Alguns dos nossos momentos</h3>
            <ResponsiveMasonry
                  columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
              >
                  <Masonry>
                      {images.map((image, i) => (
                          <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                          />
                      ))}
                  </Masonry>
              </ResponsiveMasonry>
          </section>
      </>
    )
}