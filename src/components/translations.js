import React from "react";
import { Link } from "react-router-dom";

function Translations  ({changeLanguage})  {
  return (
    <div className="fixed">
      <Link to={`?lang=en`} onClick={() => changeLanguage("en")}>
        <img
          className="flag"
          src="img/en.jpg"
          width="30px"
          alt="Eng flag"
          
        />
      </Link>
      <Link to={`?lang=es`} onClick={() => changeLanguage("es")}>
        <img
          className="flag"
          src="img/es.jpg"
          width="30px"
          alt="Esp flag"
          
        />
      </Link>
      <Link to={`?lang=ca`} onClick={() => changeLanguage("ca")}>
        <img
          className="flag"
          src="img/ca.jpg"
          width="30px"
          alt="Cat flag"
          
        />
      </Link>
    </div>
  );
};

export default Translations;
