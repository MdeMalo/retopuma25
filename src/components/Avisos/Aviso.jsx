import React from 'react';
import Slider from 'react-slick';
import './Aviso.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../../assets/Flyers/FLYER_ISC_resultado.webp';
import image2 from '../../assets/Flyers/INFO_RUTAS_resultado.webp';

const Aviso = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    arrows: true,
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
  ];

  return (
    <section className="avisos-section">
      <div className="avisos-container">
        <h2 className="avisos-title">Avisos</h2>

        <div className="avisos-slider-wrapper">
          <Slider {...settings} className="avisos-slider">
            {slides.map((slide, index) => (
              <div key={index} className="slide-content">
                <img
                  className="carousel-image"
                  src={slide.image}
                  alt={slide.title}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Aviso;