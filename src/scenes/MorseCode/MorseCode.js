import React, { Component } from 'react';
import { Row, Button, Col } from 'react-bootstrap';
import InputAndDisplayArea from './components/InputAndDisplauArea';

class MorseCode extends Component {
  render() {
    console.log(this);
    
    return (
        <>
            <header>
                <h1>Title</h1>
                <Button>Menu</Button>
            </header>
            <Row>
              <Col>
                <InputAndDisplayArea />
              </Col>
            </Row>
        </>
    );
  }
}

export default MorseCode;
