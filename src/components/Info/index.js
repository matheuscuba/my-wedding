import React, { useState } from "react";
import Countdown from 'react-countdown';
import { FlapDisplay, Presets } from 'react-split-flap-effect'
import 'react-split-flap-effect/extras/themes.css'
import './info.scss';

export default function Info(){

    const Completionist = () => <span className="cormorant">É hoje!</span>;
    const renderFlap = (number, digits) => <FlapDisplay
      className="XL lightBordered flap"
      length={digits}
      timing={10}
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
                  {renderFlap(days, 3)}
                  dias
                </span>
                <span className="cormorant">
                  {renderFlap(hours, 2)}
                  horas
                </span>
                <span className="cormorant">
                  {renderFlap(minutes, 2)}
                  minutos
                </span> 
                <span className="cormorant">
                  {renderFlap(seconds, 2)}
                  segundos
                </span>
              </div>
            )
        }
      };

    return (
        <section id="informacoes" className="section center">
            <h1 className="cormorant center">Informações</h1>
            <h3 className="countdown-title cormorant">Contagem Regressiva para o grande dia</h3>
            <Countdown 
                date={"2024-06-01T17:30:00"} 
                renderer={renderer}
            />
        </section>
    )
}