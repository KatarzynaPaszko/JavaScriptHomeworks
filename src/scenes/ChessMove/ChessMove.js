import React, { Component } from 'react';
import { chessBoard } from './components/chessBoard';
import { pawsSet } from './components/paws';
import styles from './ChessMove.module.css';
import classNames from "classnames";

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
            >a</div>
        })
        return board;

    }

    renderPaws = () => {
        const paws = pawsSet.map(paw => {
            return <i className={paw.icon} key={paw.id}></i>
        });
        return paws;
    }

    render() {
        return (
            <>
                <header>
                    <h1>Chess Move</h1>
                    {/* <Button>Menu</Button> */}
                </header>
                <br />
                <div className={[styles.chessMove__board]}>
                    {this.renderChessBoard()}
                </div>
                <div> {this.renderPaws()}</div>
                <p>bla</p>
            </>
        );
    }
}

