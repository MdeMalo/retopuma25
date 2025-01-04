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
    { nombre: "Master 20 Varonil", color: "#FF6600" },
    { nombre: "Master 30 Varonil", color: "#FF9900" },
    { nombre: "Master 40 Varonil", color: "#FFCC00" },
    { nombre: "Master 50 Varonil", color: "#FFFF00" },
    { nombre: "Juvenil Libre Varonil", color: "#CCFF00" },
    { nombre: "Juvenil Libre Femenil", color: "#99FF00" },
    { nombre: "Master 20 Varonil", color: "#66FF00" },
    { nombre: "Femenil 20", color: "#33FF00" },
    { nombre: "Master 30 Varonil", color: "#00FF00" },
    { nombre: "Femenil 30", color: "#00FF33" },
    { nombre: "Master 40 Varonil", color: "#00FF66" },
    { nombre: "Femenil 40", color: "#00FF99" },
    { nombre: "Master 50 Varonil", color: "#00FFCC" },
    { nombre: "Femenil 50", color: "#00FFFF" },
    { nombre: "Master 60 Varonil", color: "#00CCFF" },
    { nombre: "Mamut's Varonil", color: "#0099FF" },
    { nombre: "E-BIKE mixto", color: "#0066FF" },
    { nombre: "Rodadores Femenil", color: "#0033FF" },
    { nombre: "Rodadores Varonil", color: "#0000FF" },
  ];

  const edades = [
    { nombre: "Libre", color: "#FF0000" },
    { nombre: "Libre", color: "#FF3300" },
    { nombre: "19-29 años", color: "#FF6600" },
    { nombre: "30-39 años", color: "#FF9900" },
    { nombre: "40-49 años", color: "#FFCC00" },
    { nombre: "50 años y más", color: "#FFFF00" },
    { nombre: "18 años y más", color: "#CCFF00" },
    { nombre: "18 años y más", color: "#99FF00" },
    { nombre: "19 a 29 años", color: "#66FF00" },
    { nombre: "19 a 29 años", color: "#33FF00" },
    { nombre: "30 a 39 años", color: "#00FF00" },
    { nombre: "30 a 39 años", color: "#00FF33" },
    { nombre: "40 a 49 años", color: "#00FF66" },
    { nombre: "40 a 49 años", color: "#00FF99" },
    { nombre: "50 a 59 años", color: "#00FFCC" },
    { nombre: "60 años y más", color: "#00FFFF" },
    { nombre: "50 años y más", color: "#00CCFF" },
    { nombre: "90 kg y más", color: "#0099FF" },
    { nombre: "Libre", color: "#0066FF" },
    { nombre: "Rodador", color: "#0033FF" },
    { nombre: "Rodador", color: "#0000FF" },
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
