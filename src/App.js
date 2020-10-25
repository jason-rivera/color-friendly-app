import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Candy from "./candy/Candy";
import CompJason from "./jason-component/CompJason";
import Checkbox from "./jason-component/Checkbox";
import ASH from "./ash-component/ASH"

class App extends Component {

constructor() {
  super()
  this.state = {
    imageUploaded: false,
    imageURL: '',
    deteuranopia: false,
    protanopia: false,
  }
}

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
