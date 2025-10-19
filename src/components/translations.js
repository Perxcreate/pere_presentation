import React from "react";
import { Link } from "react-router-dom";

function Translations  ({changeLanguage, translations, lang})  {
  return (
    <div className="fixed">
      <Link to={`?lang=en`} onClick={() => changeLanguage("en")}>
        <img
          className="flag"
          src="img/english_flag.jpg"
          width="30px"
          alt={translations[lang].altenglishflag}
          
        />
      </Link>
      <Link to={`?lang=es`} onClick={() => changeLanguage("es")}>
        <img
          className="flag"
          src="img/spanish_flag.jpg"
          width="30px"
          alt={translations[lang].altspainflag}
          
        />
      </Link>
      <Link to={`?lang=ca`} onClick={() => changeLanguage("ca")}>
        <img
          className="flag"
          src="img/catalan_flag.jpg"
          width="30px"
          alt={translations[lang].altcatalanflag}
          
        />
      </Link>
    </div>
  );
};

export default Translations;
