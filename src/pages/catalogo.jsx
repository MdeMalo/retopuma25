import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/catalogo.css";

const Catalogo = () => {
  return (
    <>
      <Header />
      <div className="catalogoContainer">
        <Navbar />
        <div className="contentCatalogo">
          <h1 className="tituloCatalogo">
            RETO <span className="yellow-text">PUMA</span> BIKE <br />
            CATÁLOGO
          </h1>
          <p className="descriptionText">
            Explora los productos disponibles en nuestra tienda. <br />
            <span className="yellow-text">"Tu único límite eres tú"</span>
          </p>
          <div class="banner">
            <div class="third-line"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalogo;
