import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const UploadForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    // <form id="custom-form">
    //   <label id="custom-label">
    //     <input type="file" id="custom-input" />
    //     <span>+</span>
    //   </label>
    // </form>

    <InputGroup>
      <FormControl 
        placeholder="Place your URL here"
        onChange={onInputChange} 
      />
      <InputGroup.Append>
        <Button 
          variant="outline-secondary"
          onClick={onButtonSubmit}>
          Let's Go
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default UploadForm;
