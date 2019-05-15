import React from "react";
import { Square } from "../components/Square.js";
import PropTypes from "prop-types";

const Table = props => {
  let rows = [];
  props.initialWidth.map(i => {
    let td = [];
    props.initialHeight.map(j => {
      td.push(
        <Square
          key={`${i}${j}`}
          cellSize={props.cellSize}
          dataRow={props.initialWidth.indexOf(i)}
        />
      );
    });
    rows.push(<tr key={i}>{td}</tr>);
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
