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
              <UploadForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
