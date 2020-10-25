import "./App.css";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, CardImg } from "react-bootstrap";
import axios from "axios";
import UploadForm from "./components/UploadForm";
import cat from "./images/cat.jpg";

import Checkbox from "./jason-component/Checkbox";
import BlueButton from "./jason-component/BlueButton";
import LightButton from "./jason-component/LightButton";
import DarkButton from "./jason-component/DarkButton";
import {colorData} from "./Data";


class App extends Component {
  constructor() {
    super();
    this.state = {
      imageUploaded: false,
      input: "",
      imageURL: "",
      redGreenBlindness: false,
      yellowBlueBlindness: false,
      dominantColors: []
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
    this.determineColorFriendly = this.determineColorFriendly.bind(this);
  }

  // If r > 100 and g & b are 1/4r then it is "red"
  // If g > 100 and r & b are 1/4g then it is "green"
  // If the image contains green or red then it is not "color friendly"
  // colors is an array of objects with red, blue, green keys
  determineColorFriendly = (colors) => {
    this.setState({redGreenBlindness: false});
    this.setState({yellowBlueBlindness: false});

    colors.map((color) => {
      var {red, green, blue} = color;
      var quarterRed = 0.25 * red;
      var quarterGreen = 0.25 * green;

      var redGreenDifference = Math.abs(red-green);
      var maxGreenRed = Math.max(green, red);
      var halfOfMaxGR = 0.5 * maxGreenRed;

      if (red >= 100 && green <= quarterRed && blue <= quarterRed) {
        this.setState({redGreenBlindness: true})
        console.log("a");
      }else if(green >= 100 && red <= quarterGreen && blue <= quarterGreen){
        this.setState({redGreenBlindness: true});
        console.log("b");
      }

      var blueGreenDifference = Math.abs(blue-green);
      var maxBlueGreen = Math.max(blue, green);
      var halfOfMaxBG = 0.5 * maxBlueGreen;

      if (redGreenDifference <= 20 && blue <= halfOfMaxGR) {
        this.setState({yellowBlueBlindness: true})
        console.log("c");
      }else if(blueGreenDifference <= 20 && red <= halfOfMaxBG){
        this.setState({yellowBlueBlindness: true});
        console.log("d");
      }
    })
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  //When we press the submit button, we call the API
  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});

    axios({
      method: "POST",
      url:
        "https://image-color-tag.p.rapidapi.com/cloudVision/imageAttributesDetection",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "image-color-tag.p.rapidapi.com",
        "x-rapidapi-key": "499dcdcab6msh608dfa419080928p1157c5jsnce01522b204d",
        accept: "application/json",
        useQueryString: true,
      },
      data: {
        source: this.state.imageURL,
        sourceType: "url",
      },
    })
    .then((response) => {
      const data = response.data.dominantColors;
      this.determineColorFriendly(data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <h1 className="text-center color-title">
            {" "}
            <i className="fas fa-eye"></i> ColorFriendly
          </h1>
          <Row className="justify-content-md-center">
            <Col xl="6">
              <Card className="mb-4">
                <CardImg variant="top" src = {this.state.imageURL} />
              </Card>
              <UploadForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
            </Col>
          </Row>
        </Container>
        <Container className="text-center">
          </LightButton name="Red-Green Blindness">
          </LightButton name="Yellow-Blue Blind">
        </Container>

      </div>
    );
  }
}

export default App;
