import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './App.css';
import 'normalize.css';     
import 'animate.css';
import folha from './assets/folha.png'
import folha2 from './assets/folha-2.png'

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <div className='home center'>
          <h1 className='wedding-label center cormorant animate__animated animate__fadeInUp'>Casamento</h1>
          <Parallax speed={10}>
            <h1 className=' center wedding-title amsterdam main-color animate__animated animate__fadeInUp'>Maria Luísa & Matheus</h1>
          </Parallax>
          <Parallax speed={10} className="paralax-1">
            <img className="paralax-image paralax-image-1 animate__animated animate__fadeInUp" src={folha} />
          </Parallax>
          <Parallax speed={50} className="paralax-2">
            <img className="paralax-image paralax-image-2 animate__animated animate__fadeInUp" src={folha} />
          </Parallax>
          <Parallax speed={50} className="paralax-3">
            <img className="paralax-image paralax-image-3 animate__animated animate__fadeInUp" src={folha2} />
          </Parallax>
          <Parallax speed={10} className="paralax-4">
            <img className="paralax-image animate__animated animate__fadeInUp" src={folha2} />
          </Parallax>
          <div className='navbar'>
            <span className='cormorant'>INFORMAÇÕES</span>
            <span className='cormorant'>PRESENTES</span>
            <span className='cormorant'>PRESENÇA</span>
          </div>
        </div>
        <section id="informacoes" className='section center'>
          <h1 className='cormorant center'>Informações</h1>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </ParallaxProvider>
  );
}

export default App;
