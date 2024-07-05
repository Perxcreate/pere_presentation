import React from "react";
import Tooltip from "./tooltip";

function JobCards({ lang, translations, ...props}) {
  return (
    <div>
      {props.link ? (
        <a href={props.link} target="_blank" rel="nofollow">
          <img
            className="img-job"
            src={props.image}
            alt="Imagen del sitio web"
          />
        </a>
      ) : (
        <Tooltip text={translations[lang].soon}>
          <img
            className="img-job"
            src={props.image}
            alt="Imagen del sitio web"
          />
        </Tooltip>
      )}
    </div>
  );
}

export default JobCards;
