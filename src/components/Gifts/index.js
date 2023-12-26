import magalu from "./../../assets/img/magalu.png";
import pix from "./../../assets/img/pix.png";

import './style.scss';

export default function Gifts({isMobile}){
    return (
        <section id="presentes" className="section center mt">
            <h1 className="cormorant center">Presentes</h1>
            <h3 className="cormorant">Lembramos que sua presença é o presente mais valioso.<br/> Qualquer gesto vindo do coração é apreciado</h3>
            <div className="flex center space" style={{ alignItems: 'flex-start' }}>
                <div className="col">
                    <a className="magalu gift-option" style={{ backgroundImage: `url(${magalu})` }} href="https://www.querodecasamento.com.br/lista-de-casamento/matheus-e-maria-luisa" target="_blank">
                    </a>
                    <h3 className="cormorant gift-label">Explore nossa lista de desejos, para escolher um presente que nos ajudará a construir nosso lar</h3>
                </div>
                <div className="col flex-center">
                    <a className="gift-option" style={{ backgroundImage: `url(${pix})`}} href="https://nubank.com.br/cobrar/aayq/6589d740-c008-4f5e-b790-32134f122bdb" target="_blank"></a>
                    <strong className="gift-label text-center" style={{ marginTop: '10px' }}>pix@casamentomaluematheus.online</strong>
                    <h3 className="cormorant gift-label text-center">Se preferir, contribua com um presente em dinheiro via Pix acima, ajudando-nos a realizar nossos sonhos futuros.</h3>
                </div>
            </div>
        </section>
    );
}