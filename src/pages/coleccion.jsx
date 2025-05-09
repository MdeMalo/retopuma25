import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/coleccion.css";
import segundaEdi1 from "../assets/Catalogo/Segunda edicion/1.png";
import segundaEdi2 from "../assets/Catalogo/Segunda edicion/2.png";
import segundaEdi3 from "../assets/Catalogo/Segunda edicion/3.png";
import primeraEdi1 from "../assets/Catalogo/Primera edicion/4.png";
import primeraEdi2 from "../assets/Catalogo/Primera edicion/5.png";
import terceraEdi1 from "../assets/Catalogo/Tercera edicion/6.png";
import terceraEdi2 from "../assets/Catalogo/Tercera edicion/7.png";
import medalla1 from "../assets/Catalogo/Medallas/8.png";
import medalla2 from "../assets/Catalogo/Medallas/9.png";
import medalla3 from "../assets/Catalogo/Medallas/10.png";
import medalla4 from "../assets/Catalogo/Medallas/11.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Coleccion = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 820);

  const handleResize = useCallback(() => {
    setIsSmallScreen(window.innerWidth <= 820);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Header />
      <div className="catalogoContainer">
        <Navbar />
        <div className="contentCatalogo">
          <h1 className="tituloCatalogo">
            RETO <span className="yellow-text">PUMA</span> BIKE <br />
            COLECCIÓN
          </h1>
          <p>
            Explora la historia de esta competencia. <br />
            <span className="yellow-text">"Tu único límite eres tú"</span>
          </p>

          {/* Slider de imágenes medallas */}

          <div className="banner">
            <div className="third-line"></div>
            <div className="banner-text">Medallas</div>
          </div>

          {isSmallScreen ? (
            <Slider {...settings} className="sliderJerseys">
              <div>
                <img src={medalla2} alt="Medalla primera edición" />
              </div>
              <div>
                <img src={medalla3} alt="Medalla segunda edición" />
              </div>
              <div>
                <img src={medalla4} alt="Medalla tercera edición" />
              </div>
              <div>
                <img src={medalla1} alt="Medalla completa" />
              </div>
            </Slider>
          ) : (
            <div className="imagesTerceraEdicion">
              <img src={medalla2} alt="Medalla primera edicion" />
              <img src={medalla3} alt="Medalla segunda edicion" />
              <img src={medalla4} alt="Medalla tercera edicion" />
              <img src={medalla1} alt="Medalla completa" />
            </div>
          )}
          <br />

          {/* Slider de imágenes tercera edición */}

          <div className="banner">
            <div className="third-line"></div>
            <div className="banner-text">Tercera edición</div>
          </div>

          {isSmallScreen ? (
            <Slider {...settings} className="sliderJerseys">
              <div>
                <img src={terceraEdi1} alt="Jersey tercera edición" />
              </div>
              <div>
                <img src={terceraEdi2} alt="Jersey tercera edición" />
              </div>
            </Slider>
          ) : (
            <div className="imagesTerceraEdicion">
              <img src={terceraEdi1} alt="Jersey tercera edición" />
              <img src={terceraEdi2} alt="Jersey tercera edición" />
            </div>
          )}
          <br />
          {/* Slider de imágenes segunda edición */}

          <div className="banner">
            <div className="third-line"></div>
            <div className="banner-text">Segunda edición</div>
          </div>

          {isSmallScreen ? (
            <Slider {...settings} className="sliderJerseys">
              <div>
                <img src={segundaEdi1} alt="Jersey tercera edición" />
              </div>
              <div>
                <img src={segundaEdi2} alt="Jersey tercera edición" />
              </div>
              <div>
                <img src={segundaEdi3} alt="Jersey tercera edición" />
              </div>
            </Slider>
          ) : (
            <div className="imagesTerceraEdicion">
              <img src={segundaEdi1} alt="Jersey tercera edición" />
              <img src={segundaEdi2} alt="Jersey tercera edición" />
              <img src={segundaEdi3} alt="Jersey tercera edición" />
            </div>
          )}
          <br />
          {/* Slider de imágenes primera edición */}

          <div className="banner">
            <div className="third-line"></div>
            <div className="banner-text">Primera edición</div>
          </div>

          {isSmallScreen ? (
            <Slider {...settings} className="sliderJerseys">
              <div>
                <img src={primeraEdi1} alt="Jersey primera edición" />
              </div>
              <div>
                <img src={primeraEdi2} alt="Jersey primera edición" />
              </div>
            </Slider>
          ) : (
            <div className="imagesTerceraEdicion">
              <img src={primeraEdi1} alt="Jersey tercera edición" />
              <img src={primeraEdi2} alt="Jersey tercera edición" />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Coleccion;
