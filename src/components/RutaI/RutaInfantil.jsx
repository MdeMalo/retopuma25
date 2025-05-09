import React, { useEffect } from 'react';
import { FaPaw } from 'react-icons/fa'; 
import './RutaInfantil.css'; 
import data from '../../assets/Ruta/RutaI.png'

const RutaInfantil = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://strava-embeds.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const categorias = [
    { nombre: 'Inf: A Femenil', color: '#FF6347' },
    { nombre: 'Inf. A Varonil', color: '#FFB6C1' },
    { nombre: 'Inf. B Femenil', color: '#1E90FF' },
    { nombre: 'Inf. B Varonil ', color: '#32CD32' },
    { nombre: 'Inf. C Femenil', color: '#FFD700' },
    { nombre: 'Inf. C Varonil ', color: '#DA70D6' },
  ];

  const edades = [
    { nombre: '7 a 8 años', color: '#FF6347' },
    { nombre: '7 a 8 años', color: '#FFB6C1' },
    { nombre: '9 a 10 años', color: '#1E90FF' },
    { nombre: '9 a 10 años', color: '#32CD32' },
    { nombre: '11 a 12 años', color: '#FFD700' },
    { nombre: '11 a 12 años', color: '#DA70D6' },
  ];

  return (
    <div className="ruta-infantil">
      <h1>RUTA INF. A - B - C</h1>
      <div className="ruta-contenido">
        <div
          className="ruta-mapa"
          dangerouslySetInnerHTML={{
            __html:
              '<div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="9370861843" data-style="standard"></div>',
          }}
        />
        <div className="ruta-info">
          <p className="ruta-descripcion">
            Esta es una descripción de la Ruta Larga. Puedes reemplazar este texto con la descripción que desees.
          </p>
          <div className="ruta-info-columnas">
            {/* Primera columna */}
            <div className="ruta-columna">
              <p>
                <span className='black-text'>Distancia:</span> 4.58 Km
              </p>
              <p>
                <span className='black-text'>Categorías:</span>
              </p>
              <ul className="ruta-lista">
                {categorias.map((categoria, index) => (
                  <li key={index}>
                    <FaPaw
                      className="ruta-icono"
                      style={{ color: categoria.color }}
                      aria-hidden="true"
                    />{' '}
                    {categoria.nombre}
                  </li>
                ))}
              </ul>
            </div>
            {/* Segunda columna */}
            <div className="ruta-columna">
              <p>
                <span className='black-text'>Altimetría:</span> 74 m
              </p>
              <p>
                <span className='black-text'>Año Nominal:</span>
              </p>
              <ul className="ruta-lista">
                {edades.map((edad, index) => (
                  <li key={index}>
                    <FaPaw
                      className="ruta-icono"
                      style={{ color: edad.color }}
                      aria-hidden="true"
                    />{' '}
                    {edad.nombre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ruta-imagen">
        <img src={data} alt="Gráfica del terreno" />
      </div>
    </div>
  );
};

export default RutaInfantil;
