import React, { useEffect } from "react";
import { FaPaw } from "react-icons/fa";
import "./RutaCorta.css";

const RutaCorta = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://strava-embeds.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const categorias = [
    { nombre: "Elite Varonil", color: "#E3B04B" },
    { nombre: "Elite Femenil", color: "#FFD700" },
    { nombre: "Máster 20 Varonil", color: "#E3B04B" },
    { nombre: "Máster 30 Varonil", color: "#FFD700" },
    { nombre: "Máster 40 Varonil", color: "#E3B04B" },
    { nombre: "Máster 50 Varonil", color: "#FFD700" },
  ];

  const edades = [
    { nombre: "Libre", color: "#E3B04B" },
    { nombre: "Libre", color: "#FFD700" },
    { nombre: "19-29 años", color: "#E3B04B" },
    { nombre: "30-39 años", color: "#FFD700" },
    { nombre: "40-49 años", color: "#E3B04B" },
    { nombre: "50 años y más", color: "#FFD700" },
  ];

  return (
    <div className="ruta-corta">
      <h1>RUTA LARGA - 80 KM</h1>
      <div className="ruta-contenido">
        <div className="ruta-info">
          <p className="ruta-descripcion">
            Esta ruta está pensada para quienes buscan un verdadero desafío. Con 80 km de recorrido,
            atravesarás paisajes espectaculares, subidas exigentes, senderos técnicos y descensos emocionantes
            por diversas comunidades de Actopan, Hidalgo. Un desafío supremo para ciclistas experimentados.
            La ruta estará señalizada con cal y flechas de colores un día antes del evento,
            y contará con zonas de hidratación y puestos de control a lo largo del camino.
          </p>
          <div className="ruta-info-columnas">
            {/* Primera columna */}
            <div className="ruta-columna">
              <p>
                <span className="black-text">Distancia:</span> 80 Km
              </p>
              <p>
                <span className="black-text">Categorías:</span>
              </p>
              <ul className="ruta-lista">
                {categorias.map((categoria, index) => (
                  <li key={index}>
                    <FaPaw
                      className="ruta-icono"
                      style={{ color: categoria.color }}
                      aria-hidden="true"
                    />{" "}
                    {categoria.nombre}
                  </li>
                ))}
              </ul>
            </div>
            {/* Segunda columna */}
            <div className="ruta-columna">
              <p>
                <span className="black-text">Dificultad:</span> Avanzada
              </p>
              <p>
                <span className="black-text">Edad:</span>
              </p>
              <ul className="ruta-lista">
                {edades.map((edad, index) => (
                  <li key={index}>
                    <FaPaw
                      className="ruta-icono"
                      style={{ color: edad.color }}
                      aria-hidden="true"
                    />{" "}
                    {edad.nombre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mapa de Strava*/}
        {/* Mapa de Komoot */}
        <div className="ruta-mapa">
          <iframe src="https://www.komoot.com/tour/2985431690/embed?share_token=a1Ez65rIe6nqbziHJBH60WycNJYLHHZq36McXZey3cCm3gWqXJ&amp;hl=es&amp;layout=classic&amp;profile=1" width="100%" height="700" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
    </div>
  );
};

export default RutaCorta;
