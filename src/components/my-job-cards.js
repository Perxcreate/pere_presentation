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
            alt={props.alt}
          />
        </a>
      ) : (
        <Tooltip text={translations[lang].soon}>
          <img
            className="img-job"
            src={props.image}
            alt={props.alt}
          />
        </Tooltip>
      )}
    </div>
  );
}

export default JobCards;
