import React from "react";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import "./index.css";

function IndexPage({lang, translations}) {
  console.log(lang, translations)
  const isMobile = useIsMobile(); 
  return (
    <div>
      <main className="home">
        <div className="flex home-container-1">
          <span className="linea1"></span>
          <span className={`home-titles ${isMobile ? "mobile-space" : ""}`}>
            <Link className="no-link" to={`/aboutme?lang=${lang}`}>
              <p>Pere Martínez Ibar</p>
            </Link>
          </span>
          <span className="linea2"></span>
        </div>

        <div className="flex">
          <span className="linea1"></span>
          <span className={`home-titles ${isMobile ? "mobile-space" : ""}`}>
            <Link className="no-link" to={`/myworks?lang=${lang}`}>
              <p>{translations[lang].jobtitle}</p>
            </Link>
          </span>
          <span className="linea2"></span>
          <span className={`home-titles ${isMobile ? "mobile-space" : ""}`}>
            <Link className="no-link" to={`/clients?lang=${lang}`}>
              <p>{translations[lang].clientstitle}</p>
            </Link>
          </span>
          <span className="linea3"></span>
        </div>
        <div className="flex">
          <span className="linea1"></span>
        <span className={`home-titles ${isMobile ? "mobile-space" : ""}`}>
            <Link className="no-link" to={`/mygames?lang=${lang}`}>
              <p>{translations[lang].gamestitle}</p>
            </Link>
          </span>
          <span className="linea2"></span>
          
        </div>
        <div className="flex">
          <span className="linea1"></span>
          <span className={`home-titles ${isMobile ? "mobile-space" : ""}`}>
            <Link className="no-link" to={`/contact?lang=${lang}`}>
              <p>{translations[lang].contacttitle}</p>
            </Link>
          </span>
          <span className="linea2"></span>
          
        </div>

        <div className="flex agency">
          <h1>{translations[lang].quote}</h1>
        </div>
        <img className="logo" src="img/firma_pere_martinez_ibar_white.png" alt={translations[lang].altfirmapere} />
      </main>
    </div>
  );
}

export default IndexPage;
