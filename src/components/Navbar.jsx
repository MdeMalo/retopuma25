import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../assets/logo14.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Estado para controlar el scroll

  // Hook para detectar el desplazamiento de la página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Cambia 50 por el valor que necesites
        setIsScrolled(true); // Se vuelve sólido
      } else {
        setIsScrolled(false); // Se vuelve transparente
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="boxC">
      <nav
        className={`rectangle ${isScrolled ? "solid" : "transparent"}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <div className="logoPosition">
              <img src={logo2} alt="logo" />
            </div>
          </NavLink>
        </div>

        {/* Botones principales de la navbar */}
        <div className={`divsButtons ${isMenuOpen ? "is-active" : ""}`}>
          <NavLink to="/" className="div">
            INICIO
          </NavLink>
          <NavLink to="/coleccion" className="text-wrapper-2">
            COLECCIÓN
          </NavLink>
          <NavLink to="/categorias" className="text-wrapper-3">
            CATEGORIAS
          </NavLink>
          <NavLink to="/inscripciones" className="text-wrapper-4">
            INSCRIPCIONES
          </NavLink>
          <NavLink to="/ruta" className="text-wrapper-5">
            RUTA
          </NavLink>
        </div>

        {/* Menú hamburguesa para móviles */}
        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        {/* Menú desplegable para pantallas móviles */}
        {isMenuOpen && (
          <div className="divsButtons-mobile">
            <NavLink to="/" className="div">
              INICIO
            </NavLink>
            <NavLink to="/coleccion" className="text-wrapper-2">
              COLECCIÓN
            </NavLink>
            <NavLink to="/categorias" className="text-wrapper-3">
              CATEGORIAS
            </NavLink>
            <NavLink to="/inscripciones" className="text-wrapper-4">
              INSCRIPCIONES
            </NavLink>
            <NavLink to="/ruta" className="text-wrapper-5">
              RUTA
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
