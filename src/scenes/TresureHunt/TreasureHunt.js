import React, { Component } from 'react';
import { Row, Button, Col } from 'react-bootstrap';
// import InputAndDisplayArea from './components/InputAndDisplauArea';
import { mapServices } from './components/services';

export class TreasureHunt extends Component {
    render() {
        const result = mapServices.createMap();
        console.log(result);

        return (
            <>
                <header>
                    <h1>Title</h1>
                    <Button>Menu</Button>
                </header>
                <Row>
                    <Col>
                        {/* <InputAndDisplayArea /> */}
                    </Col>
                </Row>
            </>
        );
    }
}

