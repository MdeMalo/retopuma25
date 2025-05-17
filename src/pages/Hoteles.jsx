import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import villaAntigua from "../assets/Hoteles/HOTEL_LA_VILLA_ANTIGUA.png";
import sanPatricio from "../assets/Hoteles/Hotel_San_Patricio.png";
import convento from "../assets/Hoteles/Hotel_convento.png";
import sendero from "../assets/Hoteles/Hotel_sendero.png";
import libertad from "../assets/Hoteles/Hotel_libertad.png";
import pequenioEncanto from "../assets/Hoteles/pequenio_encanto.png";
import casaBlanca from "../assets/Hoteles/Casa_blanca.png";
import "../styles/Hoteles.css";

const hoteles = [
  {
    nombre: "Hotel la villa antigua",
    url: "https://maps.app.goo.gl/4L8FHZXgp61hbZFk6?g_st=iw",
    imagen: villaAntigua,
  },
  {
    nombre: "Hotel San Patricio",
    url: "https://maps.app.goo.gl/4zbdPG45ouc7MgKBA?g_st=iw",
    imagen: sanPatricio,
  },
  {
    nombre: "Hotel convento Actopan",
    url: "https://maps.app.goo.gl/Xf3u4JgaGfbX3MAD9?g_st=iw",
    imagen: convento,
  },
  {
    nombre: "Hotel sendero",
    url: "https://maps.app.goo.gl/89gh9HxPevADbnYt8?g_st=iw",
    imagen: sendero,
  },
  {
    nombre: "Hotel Libertad",
    url: "https://maps.app.goo.gl/kMKQEqkUq8vk4Gw27",
    imagen: libertad,
  },
  {
    nombre: "Hotel pequeño encanto",
    url: "https://maps.app.goo.gl/8H7m8qMgTPaQouc17",
    imagen: pequenioEncanto,
  },
  {
    nombre: "Hotel Casa Blanca",
    url: "https://maps.app.goo.gl/Yf6VUyb1YqioHVWd8",
    imagen: casaBlanca,
  },
];

const Hoteles = () => {
  return (
    <>
      <Header />
      <div className="catalogoContainer">
        <Navbar />
        <div className="contentCatalogo">
          <h1 className="tituloCatalogo">
            HOTELES <span className="yellow-text">CERCANOS</span>
          </h1>
          <p>
            Encuentra hospedaje cerca del evento. <br />
            <span className="yellow-text">Haz clic para ver en Google Maps</span>
          </p>

          <div className="banner">
            <div className="third-line"></div>
            <div className="banner-text">Opciones recomendadas</div>
          </div>

          <div className="hotelesLista">
            {hoteles.map((hotel, index) => (
              <div key={index} className="hotelCard">
                <img src={hotel.imagen} alt={`Imagen de ${hotel.nombre}`} />
                <div className="hotelInfo">
                  <h3>{hotel.nombre}</h3>
                  <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hoteles;
