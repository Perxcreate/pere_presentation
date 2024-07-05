import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function IndexPage({lang, translations}) {
  console.log(lang, translations)
  return (
    <div>
      <main className="home">
        <div className="flex home-container-1">
          <span className="linea1"></span>
          <span className="home-titles">
            <Link className="no-link" to={`/peremartinezibar?lang=${lang}`}>
              <p>Pere Martínez Ibar</p>
            </Link>
          </span>
          <span className="linea2"></span>
        </div>

        <div className="flex">
          <span className="linea1"></span>
          <span className="home-titles">
            <Link className="no-link" to={`/myjob?lang=${lang}`}>
              <p>{translations[lang].jobtitle}</p>
            </Link>
          </span>
          <span className="linea2"></span>
          <span className="home-titles">
            <Link className="no-link" to={`/clients?lang=${lang}`}>
              <p>{translations[lang].clientstitle}</p>
            </Link>
          </span>
          <span className="linea3"></span>
        </div>

        <div className="flex">
          <span className="linea1"></span>
          <span className="home-titles">
            <Link className="no-link" to={`/contact?lang=${lang}`}>
              <p>{translations[lang].contacttitle}</p>
            </Link>
          </span>
          <span className="linea2"></span>
        </div>

        <div className="flex agency">
          <h1>{translations[lang].quote}</h1>
        </div>
        <img className="logo" src="img/firma.png" alt="logo" />
      </main>
    </div>
  );
}

export default IndexPage;
