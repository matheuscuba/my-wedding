import { Parallax } from "react-scroll-parallax";
import folha from "./../../assets/img/folha.png";
import folha2 from "./../../assets/img/folha-2.png";

import './style.scss';

export default function Home(isMobile){
    return (
    <div className="home center">
        <h1 className="wedding-label center cormorant animate__animated animate__fadeInUp">
            Casamento
        </h1>
        <Parallax speed={10}>
            <h1 className=" center wedding-title amsterdam main-color animate__animated animate__fadeInUp">
                Maria Luísa & Matheus
            </h1>
        </Parallax>
        <Parallax
            disabled={isMobile}
            speed={10}
            className="paralax-1 animate__animated animate__fadeInUp"
        >
            <img
                className="paralax-image paralax-image-1"
                src={folha}
            />
        </Parallax>
        <Parallax
            disabled={isMobile}
            speed={50}
            className="paralax-2 animate__animated animate__fadeInUp"
        >
            <img
                className="paralax-image paralax-image-2"
                src={folha}
            />
        </Parallax>
        <Parallax
            disabled={isMobile}
            speed={50}
            className="paralax-3 animate__animated animate__fadeInUp"
        >
            <img
                className="paralax-image paralax-image-3"
                src={folha2}
            />
        </Parallax>
        <Parallax
            disabled={isMobile}
            speed={10}
            className="paralax-4 animate__animated animate__fadeInUp"
        >
            <img
                className="paralax-image"
                src={folha2}
            />
        </Parallax>
        <div className="navbar">
            <a href="#informacoes"><span className="cormorant">INFORMAÇÕES</span></a>
            <a href=""><span className="cormorant">PRESENTES</span></a>
            <a href=""><span className="cormorant">PRESENÇA</span></a>
        </div>
    </div>
);
}