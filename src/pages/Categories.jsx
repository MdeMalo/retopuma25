import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/Categories.css";
import CatsInf from "../components/Tablas premiaciones/infantiles";
import CatsG1 from "../components/Tablas premiaciones/grupoUno";
import CatsG2 from "../components/Tablas premiaciones/grupoDos";

const Categories = () => {
  return (
    <>
      <Header />
      <div className="categoriesContainer">
        <Navbar />
        <div className="contentCategories">
          <h1 className="tituloCategorias">
            RETO <span className="yellow-text">PUMA</span> BIKE <br />
            CATEGORÍAS
          </h1>
          <CatsInf />
          <CatsG1 />
          <CatsG2 />
        </div>

        <div className="buttonContainer">
          <Link
            to="/inscripciones"
            className="inscriptionButton"
            aria-label="Ir a la página de categorías"
          >
            Ir a Inscripciones
          </Link>
        </div>

        {/* Descripción breve debajo de la imagen */}
        <p className="descriptionText">
          Explora las distintas categorías y premios que hay en cada una. Únete
          al desafío. <br />
          <span className="yellow-text">"Tu único límite eres tú"</span>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
