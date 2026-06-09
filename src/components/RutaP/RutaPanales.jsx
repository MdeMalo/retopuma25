import React, { useEffect } from "react";
import { FaPaw } from "react-icons/fa";
import "./RutaPanales.css";

const RutaPanales = () => {

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
    <div className="ruta-panales">
      <h1>RUTA CORTA - 40 KM</h1>
      <div className="ruta-contenido">
        <div className="ruta-info">
          <p className="ruta-descripcion">
            Pensada para ciclistas que buscan un recorrido retador pero accesible,
            esta ruta de 40 km combina tramos de terracería, caminos rurales y senderos
            con vistas espectaculares a través de diversas comunidades de Actopan, Hidalgo.
            Ideal para quienes desean vivir la experiencia del Reto Puma Bike con intensidad,
            sin recorrer tanta distancia. La ruta estará señalizada y contará con zonas
            de hidratación a lo largo del camino.
          </p>
          <div className="ruta-info-columnas">
            {/* Primera columna */}
            <div className="ruta-columna">
              <p>
                <span className="black-text">Distancia:</span> 40 Km
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
                <span className="black-text">Terreno:</span> Mixto
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
          <iframe src="https://www.komoot.com/tour/2986084630/embed?share_token=aMKNqvXxs215qoBx9Bw04LKxaPdaiYb4IhLzA5gSj0In4rE6CG&amp;hl=es&amp;layout=classic&amp;profile=1" width="100%" height="700" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
    </div>
  );
};

export default RutaPanales;
