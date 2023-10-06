import React, { useState } from "react";
import './loading.scss';
import WeddingSvg from './../../assets/svgs/wedding';
import ConfigInstagram from './../../config/images.json';


function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function findConfig(username){
    return ConfigInstagram[username];
}

export default function Loading({ onClick }){

    const [leaving, setleaving] = useState(false);

    const queryParameters = new URLSearchParams(window.location.search)
    let d = queryParameters.get("d")
    let name;
    let images = [];
    let multiple = false;
    
    if(d) {
        try {
            let _data = b64DecodeUnicode(d);
            let data = JSON.parse(_data);
            name = data.n;
            multiple = data.m === 1;
            let _i = Array.from(data.i);

            if(_i && _i.length){
                images = _i.map(x => {
                    if(/^http/.test(x))
                        return x;
                    else
                        return `https://secret-successful-comic.glitch.me/?username=${x}`;
                });
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    let accessWebsite = () => {
        setleaving(true);
        setTimeout(() => onClick(), 1000);
    }

    return (
        <>
            <div className="fake-background" />
            <div className={"loading-wrapper animate__animated " + (leaving ? "animate__fadeOut" : "") }>
                <div className={"inner animate__animated " + (leaving ? "animate__fadeOutUp" : "")}>
                    <div className="wedding-wrapper animate__animated animate__fadeInUp">
                        <WeddingSvg />
                    </div>
                    <div className="welcome cormorant center animate__animated animate__fadeInUp">
                            { images && images.length ? 
                                <div className="welcome-image-wrapper">
                                    { images.map(x => <img src={x} className="welcome-image animate__animated animate__fadeIn animate__delay-1s" />) }
                                </div>
                            : null}
                        <span>Seja{multiple ? 'm' : ''} bem-vindo{multiple ? 's' : ''}</span>
                        <span className="family animate__animated animate__fadeInUp">{name}</span>
                        <span>ao nosso casamento</span>

                        <div className="btn" onClick={() => accessWebsite()}>
                            Acessar o Site
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}