import React, { Component } from 'react';
import { chessBoard } from './services/chessBoard';
import { pawsSet } from './services/paws';
import styles from './index.module.scss';
import classNames from "classnames";
import { Button, ButtonToolbar } from 'react-bootstrap';
import Paw from './components/Paw';

export class ChessMove extends Component {
    renderChessBoard = () => {
        const board = chessBoard.map((element) => {
            var squareClasses = classNames(styles.square, {
                // color every second square
                // eslint-disable-next-line
                [styles.square__black]: ((element.row % 2 === 0) && (element.col % 2 === 0)) || (element.row % 2 !== 0) && (element.col % 2 !== 0)
            })
            return <div
                className={squareClasses}
                key={element.row + '' + element.col}
            >
            a
            
            {element.chessId != null && <Paw pawId={element.chessId}/>}
            </div>
        })
        return board;

    }

    renderPaws = () => {
        const paws = pawsSet.map(paw => {
            if (paw.isOnBoard === false) {
                return <Paw pawId={paw.id}/>
            }
            // return;
        });
        return paws;
    }

    render() {
        return (
            <>
                <div className={styles.chessMove__board}>
                    {this.renderChessBoard()}
                </div>
                <div className={styles.chessMove__paws}> {this.renderPaws()}</div>
                <ButtonToolbar>
                    <Button 
                        variant="success" 
                        className={styles.chessMove__button}
                    >Add Paws
                    </Button>
                    <Button 
                        variant="success" 
                        className={styles.chessMove__button}
                    >Check possible moves
                    </Button>
                    <Button 
                        variant="outline-danger"
                        className={styles.chessMove__button}
                    >Reset
                    </Button>
                </ButtonToolbar>
                
            </>
        );
    }
}

