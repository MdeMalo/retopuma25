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
    { nombre: "Elite Femenil", color: "#FF4500" },
    { nombre: "Master 20 Varonil", color: "#FF8C00" },
    { nombre: "Master 30 Varonil", color: "#FFD700" },
    { nombre: "Master 40 Varonil", color: "#FFFF00" },
    { nombre: "Master 50 Varonil", color: "#ADFF2F" },
    { nombre: "Juvenil Libre Varonil", color: "#7FFF00" },
    { nombre: "Juvenil Libre Femenil", color: "#32CD32" },
    { nombre: "Master 20 Varonil", color: "#00FF00" },
    { nombre: "Femenil 20", color: "#00FA9A" },
    { nombre: "Master 30 Varonil", color: "#00FF7F" },
    { nombre: "Femenil 30", color: "#00FFFF" },
    { nombre: "Master 40 Varonil", color: "#1E90FF" },
    { nombre: "Femenil 40", color: "#4169E1" },
    { nombre: "Master 50 Varonil", color: "#0000FF" },
    { nombre: "Femenil 50", color: "#8A2BE2" },
    { nombre: "Master 60 Varonil", color: "#4B0082" },
    { nombre: "Mamut's Varonil", color: "#9400D3" },
    { nombre: "E-BIKE mixto", color: "#8B008B" },
    { nombre: "Rodadores Femenil", color: "#FF1493" },
    { nombre: "Rodadores Varonil", color: "#FF69B4" },
  ];

  const edades = [
    { nombre: "Libre", color: "#FF0000" },
    { nombre: "Libre", color: "#FF4500" },
    { nombre: "19-29 años", color: "#FF8C00" },
    { nombre: "30-39 años", color: "#FFD700" },
    { nombre: "40-49 años", color: "#FFFF00" },
    { nombre: "50 años y más", color: "#ADFF2F" },
    { nombre: "18 años y más", color: "#7FFF00" },
    { nombre: "18 años y más", color: "#32CD32" },
    { nombre: "19 a 29 años", color: "#00FF00" },
    { nombre: "19 a 29 años", color: "#00FA9A" },
    { nombre: "30 a 39 años", color: "#00FF7F" },
    { nombre: "30 a 39 años", color: "#00FFFF" },
    { nombre: "40 a 49 años", color: "#1E90FF" },
    { nombre: "40 a 49 años", color: "#4169E1" },
    { nombre: "50 a 59 años", color: "#0000FF" },
    { nombre: "60 años y más", color: "#8A2BE2" },
    { nombre: "50 años y más", color: "#4B0082" },
    { nombre: "90 kg y más", color: "#9400D3" },
    { nombre: "Libre", color: "#8B008B" },
    { nombre: "Rodador", color: "#FF1493" },
    { nombre: "Rodador", color: "#FF69B4" },
  ];

  return (
    <div className="ruta-corta">
      <h1>RUTA CORTA</h1>
      <div className="ruta-contenido">
        <div className="ruta-info">
          <p className="ruta-descripcion">
            Esta es una descripción de la Ruta Larga. Puedes reemplazar este
            texto con la descripción que desees.
          </p>
          <div className="ruta-info-columnas">
            {/* Primera columna */}
            <div className="ruta-columna">
              <p>
                <span className="black-text">Distancia:</span> 40.6 Km
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
                <span className="black-text">Altimetría:</span> 1189 m
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
              '<div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="11300463291" data-style="standard"></div>',
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
