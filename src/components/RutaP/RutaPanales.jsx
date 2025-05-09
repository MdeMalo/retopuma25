import React, { useEffect } from "react";
import { FaPaw } from "react-icons/fa";
import "./RutaPanales.css";
import data from "../../assets/Ruta/RutaP.png";

const RutaPanales = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://strava-embeds.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const categorias = [
    { nombre: "Inf. Pañales Femenil", color: "#FF69B4" }, // Pink
    { nombre: "Inf. Pañales Varonil", color: "#1E90FF" }, // DodgerBlue
    { nombre: "Inf. AA Femenil", color: "#FF1493" }, // DeepPink
    { nombre: "Inf. AA Varonil", color: "#00BFFF" }, // DeepSkyBlue
  ];

  const edades = [
    { nombre: "4 y menos años", color: "#FF69B4" }, // Pink
    { nombre: "4 y menos años", color: "#1E90FF" }, // DodgerBlue
    { nombre: "5 y 6 años", color: "#FF1493" }, // DeepPink
    { nombre: "5 y 6 años", color: "#00BFFF" }, // DeepSkyBlue
  ];

  return (
    <div className="ruta-panales">
      <h1>RUTA INF. PAÑALES Y AA</h1>
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
                <span className="black-text">Distancia:</span> 0.55 Km
              </p>
              <p>
                <span className="black-text">Año Nominal:</span>
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
                <span className="black-text">Altimetría:</span> 7 m
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
              '<div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="9370861814" data-style="standard"></div>',
          }}
        />
      </div>
      <div className="ruta-imagen">
        <img src={data} alt="Gráfica del terreno" />
      </div>
    </div>
  );
};

export default RutaPanales;
