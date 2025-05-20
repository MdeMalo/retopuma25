import React from "react";
import "./Sponsor.css";
import sponsor1 from "../../assets-webp/PatrocinadoresIMG/logo farmaymás.webp";
import sponsor2 from "../../assets-webp/PatrocinadoresIMG/logo perez.webp";
import sponsor3 from "../../assets-webp/PatrocinadoresIMG/logoGORDOBIKEPNG.webp";
import sponsor4 from "../../assets-webp/PatrocinadoresIMG/logoagustinos.webp";
import sponsor5 from "../../assets-webp/PatrocinadoresIMG/logoboxthas.webp";
import sponsor6 from "../../assets-webp/PatrocinadoresIMG/logomagdalena.webp";
import sponsor7 from "../../assets-webp/PatrocinadoresIMG/logonora.webp";
import sponsor8 from "../../assets-webp/PatrocinadoresIMG/logopillos.webp";
import sponsor9 from "../../assets-webp/PatrocinadoresIMG/logosubaru.webp";
import sponsor10 from "../../assets-webp/PatrocinadoresIMG/Ninis.webp";

const sponsors = [
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor4,
  sponsor5,
  sponsor6,
  sponsor7,
  sponsor8,
  sponsor9,
  sponsor10,
];

const Sponsor = () => {
  return (
    <div className="Sponsor">
      <div className="container">
        <span>Nuestros Patrocinadores</span>
        <div className="slider">
          <div className="slide-track">
            {sponsors.concat(sponsors).map((sponsor, index) => (
              <div className="slide" key={index}>
                <img src={sponsor} alt={`Patrocinador ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
