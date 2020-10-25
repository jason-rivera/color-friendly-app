import "./App.css";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, CardImg } from "react-bootstrap";

import UploadForm from "./components/UploadForm";

import cat from "./images/cat.jpg";

class App extends Component {

  constructor() {
    super();
    this.state = {
      imageUploaded: false,
      input: "",
      imageURL: "",
      deteuranopia: false,
      protanopia: false,
    };
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  //When we press the submit button, we call the API
  onButtonSubmit = () => {
    //this.setState({imageURL: this.state.input});

    fetch(
        "https://image-color-tag.p.rapidapi.com/cloudVision/imageAttributesDetection", {
        "method": "POST",
        "mode": "no-cors",
        "headers": {
          "x-rapidapi-host": "image-color-tag.p.rapidapi.com",
          "x-rapidapi-key": "499dcdcab6msh608dfa419080928p1157c5jsnce01522b204d",
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": {
          "source": "https://cloud.google.com/vision/docs/images/bali_small.jpeg",
          "sourceType": "url"
        }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <h1 className="text-center color-title">
            {" "}
            <i className="fas fa-eye"></i> ColorFriendly
          </h1>
          <Row>
            <Col>
              <Card>
                <CardImg
                  variant="top"
                  src=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Card>
              <UploadForm 
                onInputChange = {this.onInputChange} 
                onButtonSubmit = {this.onButtonSubmit}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
