import "./App.css";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, CardImg } from "react-bootstrap";
import axios from "axios";

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
    .then(response => response.json())
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
                <CardImg variant="top" src={cat} />
              </Card>
              <UploadForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
