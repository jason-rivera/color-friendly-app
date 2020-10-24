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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello World!</h1>
          <h2>jason</h2>    
          
      
=======
          <Candy name="Candy"> </Candy>
          <CompJason hairColour="black"></CompJason>
          <Checkbox/>
          <Checkbox/>
          <Checkbox/>
          <Checkbox/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
  
      </div>
    );
  }
}

export default App;
