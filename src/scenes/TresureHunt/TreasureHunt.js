import React, { Component } from 'react';
import { Row, Button, Col } from 'react-bootstrap';
import { treasureMap } from './components/treasureMap';
import styles from './TreasureHunt.module.css';

export class TreasureHunt extends Component {
    constructor() {
        super();
        this.state = {
            correctValues: [],
        }
    }

    findSolution = () => {
        let result = [];
        treasureMap.forEach(element => {
            let add = element.row.toString() + element.col.toString();
            if (Number(add) === element.num) {
                result.push(element);
            }
        });
        this.setState({ correctValues: result });
        return result;
    }

    render() {
        const treasureMapRendered = treasureMap.map(element => {
            return (
                <div
                    key={element.row + '' + element.col}
                    className={styles.treasureHunt__square}
                >
                    <span className={this.state.correctValues.includes(element)
                        ? styles.treasureHunt__solution
                        : null}>
                        {element.num}
                    </span>
                </div>
            )
        })
        return (
            <>
                <header>
                    <h1>Title</h1>
                    <Button>Menu</Button>
                </header>
                <br />
                <Row>
                    <Col>
                        <div className={styles.treasureHunt__box}>
                            {treasureMapRendered}
                        </div>
                        <br />
                        <Button onClick={this.findSolution} >See soluion</Button>
                    </Col>
                </Row>
            </>
        );
    }
}

