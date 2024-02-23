
import './style.scss';
import Pdf from './../../assets/docs/hospedagem.pdf';

export default function Hospedagem({isMobile}){
    return (
        <section id="presenca" className="section center mt">
            <h1 className="cormorant center">Hospedagem</h1>
            <h3 className="cormorant">Paara aqueles que precisam de hospedagem para o final de semana do casamento <br/> Acesse o documento abaixo com informações dos convênios de hotéis</h3>
            <div className="flex center space" style={{ alignItems: 'flex-start', paddingTop: 30 }}>
                <div className="col">
                    <a className="btn cormorant" target='_blank' href={Pdf}>
                        Mais Informações
                    </a>
                </div>
            </div>
        </section>
    );
}