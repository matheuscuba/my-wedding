import magalu from "./../../assets/img/magalu.png";
import pix from "./../../assets/img/pix.png";

import './style.scss';

export default function Gifts({isMobile}){
    return (
        <section id="presentes" className="section center mt">
            <h1 className="cormorant center">Presentes</h1>
            <h3 className="cormorant">O maior presente que você pode nos dar, é nos honrar com a sua presença</h3>
            <div className="flex center space" style={{ alignItems: 'flex-start' }}>
                <div className="col">
                    <a className="magalu gift-option" style={{ backgroundImage: `url(${magalu})` }} href="https://www.querodecasamento.com.br/lista-de-casamento/matheus-e-maria-luisa" target="_blank">
                    </a>
                    <h3 className="cormorant gift-label">Esta é a nossa lista de presente, mas fique a vontade para nos dar outros presentes fora da lista</h3>
                </div>
                <div className="col flex-center">
                    <a className="gift-option" style={{ backgroundImage: `url(${pix})`}} href="https://nubank.com.br/cobrar/aayq/6589d740-c008-4f5e-b790-32134f122bdb" target="_blank"></a>
                    <strong className="gift-label text-center" style={{ marginTop: '10px' }}>pix@casamentomaluematheus.online</strong>
                    <h3 className="cormorant gift-label text-center">Ou caso prefira, acima está o nosso Pix para presentes em dinheiro</h3>
                </div>
            </div>
        </section>
    );
}