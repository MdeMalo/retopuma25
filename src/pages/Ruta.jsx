import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/Ruta.css";
import RutaC from "../components/RutaC/RutaCorta";
import RutaI from "../components/RutaI/RutaInfantil";
import RutaP from "../components/RutaP/RutaPanales";

import flyerRutas from "../assets/Flyers/INFO_RUTAS.png";

const Ruta = () => {
  return (
    <>
      <Header />
      <div className="rutaContainer">
        <Navbar />
        <img src={flyerRutas} alt="Flyer Rutas" className="flyerRutas" />
        <RutaC />
        <RutaP />
      </div>
      <Footer />
    </>
  );
};

export default Ruta;
