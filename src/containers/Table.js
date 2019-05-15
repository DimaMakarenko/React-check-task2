import React from "react";
import { Square } from "../components/Square.js";
import PropTypes from "prop-types";

const Table = props => {
  const rows = Array.from(props.initialWidth).map(i => {
    const td = Array.from(props.initialHeight).map(j => (
      <Square
        key={`${i}${j}`}
        cellSize={props.cellSize}
        dataRow={props.initialWidth.indexOf(i)}
      />
    ));
    return <tr key={i}>{td}</tr>;
  });
  return (
    <table className="table">
      <tbody onMouseOver={props.onOver} onMouseLeave={props.onLeave}>
        {rows}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  initialHeight: PropTypes.array,
  initialWidth: PropTypes.array,
  cellSize: PropTypes.number,
  onOver: PropTypes.func,
  onLeave: PropTypes.func
};

export default Table;
