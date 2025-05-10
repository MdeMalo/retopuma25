import React, { useEffect } from "react";
import { FaPaw } from "react-icons/fa";
import "./RutaCorta.css";
import data from "../../assets/Ruta/RutaC.png";

const RutaCorta = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://strava-embeds.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const categorias = [
    { nombre: "Elite Varonil", color: "#FF0000" },
    { nombre: "Elite Femenil", color: "#FF3300" },
    { nombre: "Máster 20 Varonil", color: "#FF6600" },
    { nombre: "Máster 30 Varonil", color: "#FF9900" },
    { nombre: "Máster 40 Varonil", color: "#FFCC00" },
    { nombre: "Máster 50 Varonil", color: "#FFFF00" },
  ];

  const edades = [
    { nombre: "Libre", color: "#FF0000" },
    { nombre: "Libre", color: "#FF3300" },
    { nombre: "19-29 años", color: "#FF6600" },
    { nombre: "30-39 años", color: "#FF9900" },
    { nombre: "40-49 años", color: "#FFCC00" },
    { nombre: "50 años y más", color: "#FFFF00" },

  ];

  return (
    <div className="ruta-corta">
      <h1>RUTA LARGA </h1>
      <div className="ruta-contenido">
        <div className="ruta-info">
          <p className="ruta-descripcion">
          Esta ruta está pensada para quienes buscan un verdadero desafío. Con 80 km de recorrido, atravesarás paisajes espectaculares, subidas exigentes, un ligero sendero técnicos y descensos emocionantes por diversas comunidades de Actopan, Hidalgo.
La ruta estará señalizada con cal y flechas de colores un día antes del evento, y contará con zonas de hidratación a lo largo del camino.
          </p>
          <div className="ruta-info-columnas">
            {/* Primera columna */}
            <div className="ruta-columna">
              <p>
                <span className="black-text">Distancia:</span> 80Km
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
                <span className="black-text">Altimetría:</span> 2139 m
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
        <div
          className="ruta-mapa"
          dangerouslySetInnerHTML={{
            __html:
              '<div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="14389875451" data-style="standard" data-from-embed="false"></div>',
          }}
        />
      </div>
      <div className="ruta-imagen">
        <img src={data} alt="Gráfica del terreno" />
      </div>
    </div>
  );
};

export default RutaCorta;
