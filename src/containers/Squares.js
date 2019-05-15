import React from "react";

import Table from "containers/Table";
import Button from "components/Button";
import PropTypes from "prop-types";

import "style/main.css";

class Squares extends React.Component {
  constructor(props) {
    super(props);
    this.cellSize = props.cellSize;
    this.animationtime = null;
  }
  getArray = len => {
    return new Array(len).fill(1).map((a, i) => i);
  };
  state = {
    initialHeight: this.getArray(this.props.initialHeight),
    initialWidth: this.getArray(this.props.initialWidth),
    indexRow: 0,
    indexColumn: 0,
    moveDelBtnCol: 0,
    moveDelBtnRow: 0,
    hideBtnCol: "hide-btn",
    hideBtnRow: "hide-btn"
  };

  componentDidMount() {
    this.animationtime = 0;
    this.setState({
      moveDelBtnCol: 62 + this.cellSize,
      moveDelBtnRow: 62 + this.cellSize
    });
  }

  addRow = () => {
    this.setState({
      initialWidth: [
        ...this.state.initialWidth,
        this.state.initialWidth[this.state.initialWidth.length - 1] + 1
      ]
    });
  };
  addColumn = () => {
    this.setState({
      initialHeight: [
        ...this.state.initialHeight,
        this.state.initialHeight[this.state.initialHeight.length - 1] + 1
      ]
    });
  };

  delRow = () => {
    const { initialWidth } = this.state;
    if (initialWidth.length > 1) {
      initialWidth.splice(this.state.indexRow, 1);
      this.setState({
        initialWidth,
        hideBtnCol: "hide-btn",
        hideBtnRow: "hide-btn"
      });
    }
  };
  delColumn = () => {
    const { initialHeight } = this.state;
    if (initialHeight.length > 1) {
      initialHeight.splice(this.state.indexColumn, 1);
      this.setState({
        initialHeight,
        hideBtnCol: "hide-btn",
        hideBtnRow: "hide-btn"
      });
    }
  };

  findPosition = event => {
    let elementPosition = event.target.getBoundingClientRect();
    clearTimeout(this.animationtime);
    this.setState({
      indexRow: event.target.dataset.row,
      indexColumn: event.target.cellIndex,
      moveDelBtnCol: elementPosition.left,
      moveDelBtnRow: elementPosition.top,
      hideBtnCol:
        this.state.initialHeight.length > 1 ? "del_btn_col" : "hide-btn",
      hideBtnRow:
        this.state.initialWidth.length > 1 ? "del_btn_row" : "hide-btn"
    });
  };
  onOver = () => {
    clearTimeout(this.animationtime);
    this.setState({
      hideBtnCol:
        this.state.initialHeight.length > 1 ? "del_btn_col" : "hide-btn",
      hideBtnRow:
        this.state.initialWidth.length > 1 ? "del_btn_row" : "hide-btn"
    });
  };
  onLeave = () => {
    this.animationtime = setTimeout(() => {
      this.setState({
        hideBtnCol: "hide-btn",
        hideBtnRow: "hide-btn"
      });
    }, 1500);
  };

  render() {
    return (
      <main className="main">
        <Button
          symbol={"-"}
          onClick={this.delColumn}
          typeBtn={this.state.hideBtnCol}
          moveLeft={this.state.moveDelBtnCol}
          onOver={this.onOver}
          onLeave={this.onLeave}
        />
        <Button
          symbol={"-"}
          onClick={this.delRow}
          typeBtn={this.state.hideBtnRow}
          moveTop={this.state.moveDelBtnRow}
          onOver={this.onOver}
          onLeave={this.onLeave}
        />
        <div className="flex-div">
          <Table
            initialHeight={this.state.initialHeight}
            initialWidth={this.state.initialWidth}
            cellSize={this.cellSize}
            onOver={this.findPosition}
            onLeave={this.onLeave}
          />
          <Button
            symbol={"+"}
            onClick={this.addColumn}
            typeBtn={"add_column"}
          />
        </div>
        <Button symbol={"+"} onClick={this.addRow} typeBtn={"add_row"} />
      </main>
    );
  }
}

Squares.propTypes = {
  initialHeight: PropTypes.number,
  initialWidth: PropTypes.number,
  cellSize: PropTypes.number
};
Squares.defaultProps = {
  initialHeight: 4,
  initialWidth: 4,
  cellSize: 50
};
export default Squares;
