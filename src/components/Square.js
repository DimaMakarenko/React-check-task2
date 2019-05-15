import React from "react";

import "style/table.css";
import PropTypes from "prop-types";

const Square = props => {
  return (
    <td
      className="square"
      style={{ width: `${props.cellSize}px`, height: `${props.cellSize}px` }}
      data-row={props.dataRow}
    />
  );
};
Square.propTypes = {
  cellSize: PropTypes.number,
  dataRow: PropTypes.number
};
export { Square };
