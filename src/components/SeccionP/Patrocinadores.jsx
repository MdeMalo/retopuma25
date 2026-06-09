import React from 'react';
import './Patrocinadores.css';
import patron1 from '../../assets/Patrocinadores2026/1.webp';
import patron2 from '../../assets/Patrocinadores2026/2.webp';
import patron3 from '../../assets/Patrocinadores2026/3.webp';
import patron4 from '../../assets/Patrocinadores2026/4.webp';
import patron5 from '../../assets/Patrocinadores2026/5.webp';
import patron6 from '../../assets/Patrocinadores2026/6.webp';
import patron7 from '../../assets/Patrocinadores2026/7.webp';
import patron8 from '../../assets/Patrocinadores2026/8.webp';
import patron9 from '../../assets/Patrocinadores2026/9.webp';
import patron10 from '../../assets/Patrocinadores2026/10.webp';
import patron11 from '../../assets/Patrocinadores2026/11.webp';
import patron12 from '../../assets/Patrocinadores2026/12.webp';
import patron13 from '../../assets/Patrocinadores2026/13.webp';
import patron14 from '../../assets/Patrocinadores2026/14.webp';
import patron15 from '../../assets/Patrocinadores2026/15.webp';
import patron16 from '../../assets/Patrocinadores2026/16.webp';
import patron17 from '../../assets/Patrocinadores2026/17.webp';
import patron18 from '../../assets/Patrocinadores2026/18.webp';
import patron19 from '../../assets/Patrocinadores2026/19.webp';
import patron20 from '../../assets/Patrocinadores2026/20.webp';
import patron21 from '../../assets/Patrocinadores2026/21.webp';
import patron22 from '../../assets/Patrocinadores2026/22.webp';
import patron23 from '../../assets/Patrocinadores2026/23.webp';
import patron24 from '../../assets/Patrocinadores2026/24.webp';
import patron25 from '../../assets/Patrocinadores2026/25.webp';
import patron26 from '../../assets/Patrocinadores2026/26.webp';
import patron27 from '../../assets/Patrocinadores2026/27.webp';
import patron28 from '../../assets/Patrocinadores2026/28.webp';
import patron29 from '../../assets/Patrocinadores2026/29.webp';
import patron30 from '../../assets/Patrocinadores2026/30.webp';
import patron31 from '../../assets/Patrocinadores2026/31.webp';
import patron32 from '../../assets/Patrocinadores2026/32.webp';
import patron33 from '../../assets/Patrocinadores2026/33.webp';
import patron34 from '../../assets/Patrocinadores2026/34.webp';

const sponsors = [
  patron1, patron2, patron3, patron4, patron5, patron6, patron7, patron8, patron9,
  patron10, patron11, patron12, patron13, patron14, patron15, patron16, patron17,
  patron18, patron19, patron20, patron21, patron22, patron23, patron24, patron25, patron26,
  patron27, patron28, patron29, patron30, patron31, patron32, patron33, patron34
];

const Patrocinadores = () => {
  return (
    <div className='patrocinadores'>
      <div className='container'>
        <h2>PATROCINADORES</h2>
        <div className='sponsors-grid'>
          {sponsors.map((sponsor, index) => (
            <div key={index} className='sponsor-item'>
              <img src={sponsor} alt={'Patrocinador ${index + 1}'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patrocinadores;