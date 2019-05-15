import React from "react";
import PropTypes from "prop-types";

import "style/button.css";

const Button = props => {
  let styleBtn = "";
  switch (props.typeBtn) {
    case "del_btn_col":
      styleBtn += "del_btn del_column";
      break;
    case "del_btn_row":
      styleBtn += "del_btn del_row";
      break;
    case "add_column":
      styleBtn += "add_btn add_column";
      break;
    case "add_row":
      styleBtn += "add_btn add_row";
      break;
    case "hide-btn":
      styleBtn += "hide-btn";
      break;
    default:
      styleBtn += "";
  }
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

export default Button;
