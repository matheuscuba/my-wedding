
import './style.scss';

export default function RSVP({isMobile}){
    return (
        <section id="presenca" className="section center mt">
            <h1 className="cormorant center">Presença</h1>
            <h3 className="cormorant">Confirme sua presença usando o link abaixo<br/> Use o nome que está no seu convite para confirmar sua presença</h3>
            <div className="flex center space" style={{ alignItems: 'flex-start', paddingTop: 30 }}>
                <div className="col">
                    <a className="btn cormorant" target='_blank' href="https://assessoriavip.com.br/rsvpUnico/b70ee370-0dfc-11ee-8da3-95f31d95c58f">
                        Confirmar presença
                    </a>
                </div>
            </div>
        </section>
    );
}