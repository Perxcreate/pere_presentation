import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/title";

const Error404 = ({lang, translations}) => {
  return (
    <div className="error-container">
      <Title title={"Error 404"} />
      <div className="flex home-container-1">
          <span className="linea1"></span>
          <span className="home-titles">
            <Link className="no-link" to="/" >{translations[lang].errorback}</Link>
          </span>
          <span className="linea2"></span>
        </div>
      
    </div>
  );
};

export default Error404;
