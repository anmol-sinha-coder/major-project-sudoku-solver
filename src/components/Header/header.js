import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import me from "../../assets/jp.png";

const header = (props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">React Sudoku Solver</h1>
      <h5 className="App-author"><font color="red"> Anmol Sinha.   </font>
                            <br/><font color="green"> Arpit Nabaria. </font>
                            <br/><font color="blue"> Ankit Jha.     </font>
                            <br/><font color="black"> Vedant Shrivastava.     </font></h5>
      <img src={me} className="App-author-image" alt="logo" />
    </header>
  );
};

export default header;
