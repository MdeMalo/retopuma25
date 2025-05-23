import React from "react";
import { Link } from "react-router-dom";
import "./Anuncio.css";
import imagenAnuncio from "../../assets-webp/Anuncio/jersey.webp";

const Anuncio = () => {
  return (
    <section className="anuncio">
      <div className="anuncio-container">
        <div className="anuncio-imagen">
          <img src={imagenAnuncio} alt="" />
        </div>
        <div className="anuncio-texto">
          <h1>¡LOS RECUERDOS SON PARA SIEMPRE!</h1>
          <p>Colección de Reto Puma Bike</p>
          
          <Link
            to="/coleccion"
            className="anuncio-boton"
          >
            ¡REVISA NUESTRA COLECCION!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Anuncio;
