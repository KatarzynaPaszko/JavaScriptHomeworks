import React, { Component } from 'react';
import { chessBoard } from './components/chessBoard';
import styles from './ChessMove.module.css';

export class ChessMove extends Component {
    renderChessBoard = () => {
        const board = chessBoard.map(element => {
            var squareClasses = [
                styles.square,
                styles.square__black,
            ]
            return <div
                className={squareClasses}
                key={element.row + '' + element.col}
            >a</div>
        })
        console.log(chessBoard);
        return board;

    }

    render() {
        return (
            <>
                <header>
                    <h1 className={styles.square}>Chess Move</h1>
                    {/* <Button>Menu</Button> */}
                </header>
                <br />
                <div>
                    {this.renderChessBoard()}
                </div>
                <p>bla</p>
            </>
        );
    }
}

