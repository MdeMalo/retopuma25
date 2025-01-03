import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import flayer from "../assets/flayer.png";
import whatsappLogo from "../assets/logos/whatsapp-logo.svg";
import "../styles/inscripciones.css";

const Inscripciones = () => {
  const handleInscribirClick = () => {
    // Número de teléfono en formato internacional (sin el signo "+")
    const telefono = "527731431609"; // Reemplaza con el número real
    const mensaje = "¡Hola! Estoy interesado en inscribirme al reto Puma Bike."; // Mensaje predeterminado
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank"); // Abre WhatsApp en una nueva pestaña
  };

  return (
    <>
      <Header />
      <div className="inscripcionesContainer">
        <Navbar />
        <div className="contentCategories">
          <h1 className="tituloCategorias">
            RETO <span className="yellow-text">PUMA</span> BIKE <br />
            INSCRIPCIONES
          </h1>
          <div className="descriptionText">
            <p>
              Participa en el desafío y vive una experiencia única sobre ruedas.
              Inscríbete ahora y demuestra de qué estás hecho.
            </p>
            <img src={flayer} alt="flayer" className="flayerIMG" />
            <button
              className="btnInscripcion"
              onClick={handleInscribirClick}
              aria-label="Inscribirse al reto Puma Bike a través de WhatsApp"
            >
              <img
                src={whatsappLogo}
                alt="WhatsApp Logo"
                className="whatsappLogo"
              />
              INSCRIBIRME
            </button>
            <button
              className="btnCategories"
              onClick={() => (window.location.href = "/categorias")}
              aria-label="Ir a la página de categorías"
            >
              VER CATEGORÍAS
            </button>
            <span className="red-text">*IMPORTANTE:</span> Se tiene un límite de
            48 horas para la realización del pago. De no ser así, la inscripción
            se dará por no realizada.
            <p className="yellow-text">"Tu único límite eres tú"</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Inscripciones;
