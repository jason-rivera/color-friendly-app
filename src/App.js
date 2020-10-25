import "./App.css";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, CardImg } from "react-bootstrap";
import axios from "axios";
import UploadForm from "./components/UploadForm";
import cat from "./images/cat.jpg";
import LightButton from "./jason-component/LightButton";



class App extends Component {
  constructor() {
    super();
    this.state = {
      imageUploaded: false,
      input: "",
      imageURL: cat,
      redGreenFriendly: true,
      yellowBlueFriendly: true,
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

    console.log(colors);
    colors.map((color) => {
      var {red, green, blue} = color;
      var quarterRed = 0.25 * red;
      var quarterGreen = 0.25 * green;

      var redBlueDifference = Math.abs(red-blue);

      var redGreenDifference = Math.abs(red-green);
      var maxGreenRed = Math.max(green, red);
      var halfOfMaxGR = 0.5 * maxGreenRed;

      var blueGreenDifference = Math.abs(blue-green);
      var maxBlueGreen = Math.max(blue, green);
      var halfOfMaxBG = 0.5 * maxBlueGreen;

      if (red >= 100 && green <= quarterRed && blue <= quarterRed) {
        this.setState({redGreenFriendly: false})
        console.log("a");
      }else if(redBlueDifference <= 20 && green - redBlueDifference >= 20){
        this.setState({redGreenFriendly: false});
        console.log("b");
      }


      if (redGreenDifference <= 20 && blue <= halfOfMaxGR) {
        this.setState({yellowBlueFriendly: false})
        console.log("c");
      }else if(blueGreenDifference <= 20 && red <= halfOfMaxBG){
        this.setState({yellowBlueFriendly: false});
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
    this.setState({redGreenFriendly: true});
    this.setState({yellowBlueFriendly: true});

    axios({
      method: "POST",
      url:
        "https://image-color-tag.p.rapidapi.com/cloudVision/imageAttributesDetection",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "image-color-tag.p.rapidapi.com",
        "x-rapidapi-key": "0e22180accmsh9a496466775e3d1p1b5633jsne17fc2e367fa",
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
      this.setState({imageUploaded: true});
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
          <LightButton name="Red-Green Not Friendly" isFriendly = {this.state.redGreenFriendly}/>
          <LightButton name="Yellow-Blue Not Friendly" isFriendly = {this.state.yellowBlueFriendly}/>
        </Container>

      </div>
    );
  }
}

export default App;
