import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const UploadForm = () => {
  return (
    // <form id="custom-form">
    //   <label id="custom-label">
    //     <input type="file" id="custom-input" />
    //     <span>+</span>
    //   </label>
    // </form>

    <InputGroup>
      <FormControl placeholder="Place your URL here" />
      <InputGroup.Append>
        <Button variant="outline-secondary">Let's Go</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default UploadForm;
