import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import me from "../../assets/jp.png";

const header = (props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">React Sudoku Solver</h1>
      <h5 className="App-author">Anmol Sinha<br/>Arpit Nabaria<br/>Ankit Jha</h5>
      <img src={me} className="App-author-image" alt="logo" />
    </header>
  );
};

export default header;
