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
      imageURL: "",
      deteuranopia: false,
      protanopia: false,
    };
  }

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
=======
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
              <UploadForm />
            </Col>
          </Row>
        </Container>
>>>>>>> 3a1d200e2c9db0b7c457733ea88421c8816f049c
      </div>
    );
  }
}

export default App;
