import React from 'react';
import './About.css';
import cyclingImage from '../../assets-webp/video.webp';

const About = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2>Cuarta Edición 2026</h2>
        <p>
          Bienvenido a la <strong>Cuarta Edición del Reto Puma Bike 2026</strong>.
          Somos una comunidad apasionada por el ciclismo, dedicada a promover
          la participación y el espíritu deportivo en todas las edades.
          Este año, nos complace ofrecerte dos rutas desafiantes: <strong>40 km</strong> y <strong>80 km</strong>,
          diseñadas para ciclistas de todos los niveles. 
        </p>
        <p className="event-highlight">
          <strong>📅 Fecha:</strong> 5 de Julio, 2026 | <strong>📍 Ubicación:</strong> Actopan, Hidalgo | <strong>🕐 Arranque:</strong> 8:00 AM<br/>
          <strong>🚴 Salida y Meta:</strong> Pabellón Gastronómico
        </p>
        <p>
          Organizamos competencias que reúnen a ciclistas de todas partes, 
          fomentando un ambiente de sana convivencia, desarrollo personal y 
          excelencia deportiva. ¡Atrévete a recorrer el territorio Puma!
        </p>
      </div>
      <div className="about-us-image">
        <img src={cyclingImage} alt="Ciclistas en carrera" />
      </div>
    </section>
  );
};

export default About;

