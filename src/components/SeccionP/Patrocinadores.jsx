import React from 'react';
import './Patrocinadores.css';
import patron1 from '../../assets/LogoPatrocinadores/LOGO1.png';
import patron2 from '../../assets/LogoPatrocinadores/LOGO2.png';
import patron3 from '../../assets/LogoPatrocinadores/LOGO3.png';
import patron4 from '../../assets/LogoPatrocinadores/LOGO4.png';
import patron5 from '../../assets/LogoPatrocinadores/LOGO5.png';
import patron6 from '../../assets/LogoPatrocinadores/LOGO6.png';
import patron7 from '../../assets/LogoPatrocinadores/LOGO7.png';
import patron8 from '../../assets/LogoPatrocinadores/LOGO8.png';
import patron9 from '../../assets/LogoPatrocinadores/LOGO9.png';
import patron10 from '../../assets/LogoPatrocinadores/LOGO10.png';
import patron11 from '../../assets/LogoPatrocinadores/LOGO11.png';
import patron12 from '../../assets/LogoPatrocinadores/LOGO12.png';
import patron13 from '../../assets/LogoPatrocinadores/LOGO13.png';
import patron14 from '../../assets/LogoPatrocinadores/LOGO14.png';
import patron15 from '../../assets/LogoPatrocinadores/LOGO15.png';
import patron16 from '../../assets/LogoPatrocinadores/LOGO16.png';
import patron17 from '../../assets/LogoPatrocinadores/LOGO17.png';
import patron18 from '../../assets/LogoPatrocinadores/LOGO18.png';
import patron19 from '../../assets/LogoPatrocinadores/LOGO19.png';
import patron20 from '../../assets/LogoPatrocinadores/LOGO20.png';
import patron21 from '../../assets/LogoPatrocinadores/LOGO21.png';
import patron22 from '../../assets/LogoPatrocinadores/LOGO22.png';
import patron23 from '../../assets/LogoPatrocinadores/LOGO23.png';
import patron24 from '../../assets/LogoPatrocinadores/LOGO24.png';
import patron25 from '../../assets/LogoPatrocinadores/LOGO25.png';
import patron26 from '../../assets/LogoPatrocinadores/LOGO26.png';
import patron27 from '../../assets/LogoPatrocinadores/LOGO27.png';
import patron28 from '../../assets/LogoPatrocinadores/LOGO28.png';
import patron29 from '../../assets/LogoPatrocinadores/LOGO29.png';
import patron30 from '../../assets/LogoPatrocinadores/LOGO30.png';
import patron31 from '../../assets/LogoPatrocinadores/LOGO31.png';
import patron32 from '../../assets/LogoPatrocinadores/LOGO32.png';
import patron33 from '../../assets/LogoPatrocinadores/LOGO33.png';
import patron34 from '../../assets/LogoPatrocinadores/LOGO34.png';
import patron35 from '../../assets/LogoPatrocinadores/LOGO35.png';
import patron36 from '../../assets/LogoPatrocinadores/LOGO36.png';
import patron37 from '../../assets/LogoPatrocinadores/LOGO37.png';
import patron38 from '../../assets/LogoPatrocinadores/LOGO38.png';
import patron39 from '../../assets/LogoPatrocinadores/LOGO39.png';
  

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