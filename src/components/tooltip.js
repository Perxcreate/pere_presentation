import React from "react";

function Tooltip(props) {
  return (
    <div className="tooltip-container">
      <span className="tooltip-text">{props.text}</span>
      {props.children}
    </div>
  );
}

export default Tooltip;
