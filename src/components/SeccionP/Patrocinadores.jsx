import React from 'react';
import './Patrocinadores.css';
import patron1 from '../../assets-webp/LogoPatrocinadores/LOGO1.webp';
import patron2 from '../../assets-webp/LogoPatrocinadores/LOGO2.webp';
import patron3 from '../../assets-webp/LogoPatrocinadores/LOGO3.webp';
import patron4 from '../../assets-webp/LogoPatrocinadores/LOGO4.webp';
import patron5 from '../../assets-webp/LogoPatrocinadores/LOGO5.webp';
import patron6 from '../../assets-webp/LogoPatrocinadores/LOGO6.webp';
import patron7 from '../../assets-webp/LogoPatrocinadores/LOGO7.webp';
import patron8 from '../../assets-webp/LogoPatrocinadores/LOGO8.webp';
import patron9 from '../../assets-webp/LogoPatrocinadores/LOGO9.webp';
import patron10 from '../../assets-webp/LogoPatrocinadores/LOGO10.webp';
import patron11 from '../../assets-webp/LogoPatrocinadores/LOGO11.webp';
import patron12 from '../../assets-webp/LogoPatrocinadores/LOGO12.webp';
import patron13 from '../../assets-webp/LogoPatrocinadores/LOGO13.webp';
import patron14 from '../../assets-webp/LogoPatrocinadores/LOGO14.webp';
import patron15 from '../../assets-webp/LogoPatrocinadores/LOGO15.webp';
import patron16 from '../../assets-webp/LogoPatrocinadores/LOGO16.webp';
import patron17 from '../../assets-webp/LogoPatrocinadores/LOGO17.webp';
import patron18 from '../../assets-webp/LogoPatrocinadores/LOGO18.webp';
import patron19 from '../../assets-webp/LogoPatrocinadores/LOGO19.webp';
import patron20 from '../../assets-webp/LogoPatrocinadores/LOGO20.webp';
import patron21 from '../../assets-webp/LogoPatrocinadores/LOGO21.webp';
import patron22 from '../../assets-webp/LogoPatrocinadores/LOGO22.webp';
import patron23 from '../../assets-webp/LogoPatrocinadores/LOGO23.webp';
import patron24 from '../../assets-webp/LogoPatrocinadores/LOGO24.webp';
import patron25 from '../../assets-webp/LogoPatrocinadores/LOGO25.webp';
import patron26 from '../../assets-webp/LogoPatrocinadores/LOGO26.webp';
import patron27 from '../../assets-webp/LogoPatrocinadores/LOGO27.webp';
import patron28 from '../../assets-webp/LogoPatrocinadores/LOGO28.webp';
import patron29 from '../../assets-webp/LogoPatrocinadores/LOGO29.webp';
import patron30 from '../../assets-webp/LogoPatrocinadores/LOGO30.webp';
import patron31 from '../../assets-webp/LogoPatrocinadores/LOGO31.webp';
import patron32 from '../../assets-webp/LogoPatrocinadores/LOGO32.webp';
import patron33 from '../../assets-webp/LogoPatrocinadores/LOGO33.webp';
import patron34 from '../../assets-webp/LogoPatrocinadores/LOGO34.webp';
import patron35 from '../../assets-webp/LogoPatrocinadores/LOGO35.webp';
import patron36 from '../../assets-webp/LogoPatrocinadores/LOGO36.webp';
import patron37 from '../../assets-webp/LogoPatrocinadores/LOGO37.webp';
import patron38 from '../../assets-webp/LogoPatrocinadores/LOGO38.webp';
import patron39 from '../../assets-webp/LogoPatrocinadores/LOGO39.webp';
  

const sponsors = [
  patron1, patron2, patron3, patron4, patron5, patron6, patron7, patron8, patron9,
  patron10, patron11, patron12, patron13, patron14, patron15, patron16, patron17,
  patron18, patron19, patron20, patron21, patron22, patron23, patron24, patron25, patron26,
  patron27, patron28, patron29, patron30, patron31, patron32, patron33, patron34, patron35,
  patron36, patron37, patron38, patron39
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