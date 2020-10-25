import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const UploadForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <InputGroup>
      <FormControl 
        placeholder="Paste your image URL here"
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
