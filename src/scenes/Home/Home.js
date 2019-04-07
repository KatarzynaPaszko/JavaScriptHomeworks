import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Tile from "../../components/Tile/Tile";
import { allRoutes } from '../../routes/index';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <>
            <header className="App-header">
                <h1>JavaScript Homeworks</h1>
            </header>
            <Row>
                {allRoutes.map(({ name, img, description, ...props }) => (
                    <Col>
                        <NavLink
                            exact={true}
                            key={name}
                            {...props}
                        >
                            <Tile
                                name={name}
                                img={img}
                                description={description}
                            />
                        </NavLink>
                    </Col>
                ))}
            </Row>
        </>
    );
  }
}

export default Home;
