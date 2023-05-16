import React, { useState } from "react";
import './loading.scss';
import WeddingSvg from './../../assets/svgs/wedding';

export default function Loading(isMobile){

    const queryParameters = new URLSearchParams(window.location.search)
    let name = queryParameters.get("n")

    if(name)
        name = atob(name);

    return (
        <div className="loading-wrapper">
            <div className="inner animate__animated animate__fadeOutUp animate__delay-3s">
                <div className="wedding-wrapper animate__animated animate__fadeInUp">
                    <WeddingSvg />
                </div>
                <div className="welcome cormorant center animate__animated animate__fadeInUp">
                    <span>Seja bem-vindo</span>
                    <span className="family animate__animated animate__fadeInUp">{name}</span>
                    <span>ao nosso casamento</span>
                </div>
            </div>
        </div>
    );
}