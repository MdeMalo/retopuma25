import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import VAMALogo from "../../assets/VAMA_resultado.webp"
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>RETO PUMA BIKE</h2>
        <nav className="footer-nav">
          <NavLink to="/">INICIO</NavLink>
          <NavLink to="/ruta">RUTA</NavLink>
          <NavLink to="/inscripciones">INSCRIPCIONES</NavLink>
          <NavLink to="/coleccion">COLECCIÓN</NavLink>
          <NavLink to="/categorias">CATEGORIAS</NavLink>
          <NavLink to="/hoteles">HOTELES</NavLink>
        </nav>

        <p>
          En Reto Puma Bike es una experiencia única que celebra la pasión por
          el ciclismo. Reunimos a ciclistas de todos los niveles, con eventos de
          calidad, competidores internacionales y nacionales, inscripciones
          accesibles y una premiación emocionante. Es más que una competencia:
          es un desafío, una conexión y una celebración de cada kilómetro
          recorrido.{" "}
          <span className="highlight">
            Atrévete a recorrer el territorio puma.
          </span>
        </p>
        <div className="footer-socials">
          <h3>Síguenos en nuestras redes sociales:</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/reto_puma_bike_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/people/RETO-PUMA-BIKE/100092370199634/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com/channel/UCbj7_vPWpUPA7CbAx0MlZmQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/527721199093"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <p className="footer-contact">
          Contacto:{" "}
          <a href="mailto:retopumabike@gmail.com">retopumabike@gmail.com</a>
        </p>
        <p className="footer-address">
          Dirección:{" "}
          <a href="https://maps.app.goo.gl/QXDN6FzP7AgYHR7q6">
            Libertad 1, Aviación, 42506 Actopan, Hgo.
          </a>
        </p>
        <div className="footer-developed">
          <div className="dev-info">
            <span className="dev-text">Desarrollado por</span>
            <span className="dev-company">VAMA Solutions</span>
            <span className="dev-contact">
              Contáctanos: 
              <a href="mailto:solucionesvama@gmail.com">solucionesvama@gmail.com</a>
              {" \u00B7 "}
              <a href="https://wa.me/527731506657" target="_blank" rel="noopener noreferrer">7731506657</a>
            </span>
          </div>
          <div className="dev-logo">
            {/* Place logo image at public/vama-logo.png or replace path as needed */}
            <img src={VAMALogo} alt="VAMA Solutions" />
          </div>
        </div>

        <p className="footer-copyright">
          © 2025 Reto Puma Bike. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
