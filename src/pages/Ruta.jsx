import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/Ruta.css";
import RutaC from "../components/RutaC/RutaCorta";
import RutaI from "../components/RutaI/RutaInfantil";
import RutaP from "../components/RutaP/RutaPanales";

const Ruta = () => {
  return (
    <>
      <Header />
      <div className="rutaContainer">
        <Navbar />
        <RutaC />
        <RutaI />
        <RutaP />
      </div>
      <Footer />
    </>
  );
};

export default Ruta;
