import React from "react";
// import "style/button.css";

const AddBtn = props => {
  return (
    <div
      className={`button add_btn ${props.className}`}
      onClick={props.onClick}
    >
      +
    </div>
  );
};

export { AddBtn };
