import React from "react";
import PropTypes from "prop-types";

import "style/button.css";

const Button = props => {
  const styleBtn = GetStyle(props.typeBtn);
  return (
    <div
      className={`button ${styleBtn}`}
      onClick={props.onClick}
      style={{
        left: `${props.moveLeft}px`,
        top: `${props.moveTop}px`,
        width: `${props.cellSize}px`,
        height: `${props.cellSize}px`
      }}
      onMouseOver={props.onOver}
      onMouseLeave={props.onLeave}
    >
      {props.symbol}
    </div>
  );
};
Button.propTypes = {
  symbol: PropTypes.string,
  onClick: PropTypes.func,
  typeBtn: PropTypes.string,
  onOver: PropTypes.func,
  onLeave: PropTypes.func,
  moveTop: PropTypes.number,
  moveLeft: PropTypes.number
};

const GetStyle = style => {
  switch (style) {
    case "del_btn_col":
      return "del_btn del_column";
    case "del_btn_row":
      return "del_btn del_row";
    case "add_column":
      return "add_btn add_column";
    case "add_row":
      return "add_btn add_row";
    case "hide-btn":
      return "hide-btn";
    default:
      return "";
  }
};
export default Button;
