import React from "react";
import ReactDOM from "react-dom";
import Squares from "./containers/Squares";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Squares initialHeight={4} initialWidth={4} cellSize={50} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
