import React from 'react';
import '../styles/Welcome.css';
import Sponsor from './patrocinadores/Sponsor';
import Footer from './Footer/Footer';
import About from './About us/About';
import Aviso from './Avisos/Aviso';
import Patrocinadores from './SeccionP/Patrocinadores';
import Anuncio from './Anuncio/Anuncio';

const Welcome = () => {
  return (
    <div>
      <div className="welcome-container">
        {/* Video de fondo */}
        <iframe
          className="background-video"
          src="https://www.youtube.com/embed/iGJ1h3ychoo?autoplay=1&mute=1&loop=1&playlist=iGJ1h3ychoo&controls=0&cc_load_policy=0"
          title="cycling motivation (MTB) 2020"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        {/* Contenido superpuesto */}
        <div className="content">
          <div className="event-badge">CUARTA EDICIÓN</div>
          <h1>
            RETO <span className="yellow-text">PUMA</span> BIKE
          </h1>
          <div className="event-info">
            <div className="info-item">
              <span className="info-icon">📅</span>
              <span>5 de Julio, 2026</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <span>Actopan, Hidalgo</span>
            </div>
            <div className="info-item">
              <span className="info-icon">🕐</span>
              <span>8:00 AM Arranque</span>
            </div>
          </div>
          <div className="rutas-preview">
            <div className="ruta-badge">40 KM</div>
            <span className="badge-separator">•</span>
            <div className="ruta-badge">80 KM</div>
          </div>
        </div>
      </div>

      {/* Componente Sponsor */}
      <div className="sponsor-section">
        <Sponsor />
      </div>

      {/* Componente Avisos */}
      <div className="avisos-section">
        <Aviso />
      </div>

      {/* Componente About */}
      <div className="about-us-section">
        <About />
      </div>
      
      {/* Componente Anuncio */}
      <div className="anuncio-section">
        <Anuncio />
      </div>

      {/* Componente Patrocinadores */}
      <div className="sponsor-section">
        <Patrocinadores />
      </div>

      {/* Componente Footer */}
      <Footer />
    </div>
  );
};

export default Welcome;
