import React from "react";
// import "style/button.css";

const DelBtn = props => {
  return (
    <div
      className={`button del_btn ${props.className}`}
      onClick={props.onClick}
      style={{
        left: `${props.moveLeft}px`,
        top: `${props.moveTop}px`,
        visibility: `${props.hideBtn}`
      }}
      onMouseOver={props.onOver}
      onMouseLeave={props.onLeave}
    >
      -
    </div>
  );
};

export { DelBtn };
