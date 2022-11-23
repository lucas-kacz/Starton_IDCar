import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Connect from "./components/Connect/Connect";
import Web3 from "web3";
//import SignMessage from "./components/SignMessage/SignMessage";

function App() {

  return (
    <div className="App">
      <div className="nav">
        <a className="left">Home</a>
        <a className="right">About</a>
      </div>
      <div className="title_block">
        <h1>ID Car</h1>
      </div>
      <Connect></Connect>
    </div>
  );
}

export default App;