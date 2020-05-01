import React from "react";
import ReactDOM from "react-dom";
import Battleship from "app/components/battleship";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Battleship />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
