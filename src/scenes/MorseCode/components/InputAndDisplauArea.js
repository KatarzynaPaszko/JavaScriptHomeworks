import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Modal } from 'react-bootstrap';
import { morseCodeDecoder } from './services';

class InputAndDisplayArea extends Component {
  render() {
      morseCodeDecoder()
    return (
        <>
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Enter text or Morse Code"
                aria-label="text or Morse Code"
            />
            <InputGroup.Append>
                <Button variant="outline-secondary">Convert</Button>
                <Button variant="outline-secondary">Clear</Button>
            </InputGroup.Append>
        </InputGroup>
        
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Converted text</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Converted text goes here</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Copy</Button>
                
            </Modal.Footer>
        </Modal.Dialog>;
        </>
    );
  }
}

export default InputAndDisplayArea;
