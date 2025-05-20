import React from 'react';
import Slider from 'react-slick';
import './Aviso.css';

// Importar estilos de Slick Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../../assets-webp/Anuncios generales/Aviso1.webp';
import image2 from '../../assets-webp/Anuncios generales/Aviso2.webp';
import image3 from '../../assets-webp/Anuncios generales/Aviso3.webp';
import image4 from '../../assets-webp/Anuncios generales/prueba.webp';

const Aviso = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const slides = [
    {
      image: image1,
      title: 'Primer Aviso',
    },
    {
      image: image2,
      title: 'Segundo Aviso',
    },
    {
      image: image3,
      title: 'Tercer Aviso',
    },
    {
      image: image4,
      title: 'Cuarto Aviso',
    },
  ];

  return (
    <div className="avisos-container">
      <h2 className="avisos-title">Avisos</h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            <img className="carousel-image" src={slide.image} alt={slide.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Aviso;

