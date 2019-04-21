import React from 'react';
// import classNames from "classnames";
// import { pawsSet } from '../../services/paws';
// import styles from './index.module.scss';


interface IChessBoardProps {
    pawId?: number;
}

export const ChessBoard: React.StatelessComponent<IChessBoardProps> = ({
    // pawId
}) => {
    return <p>dd</p>
    // const pawToRender = pawsSet.find(paw => {
    //     return paw.id === pawId
    // });
    // const pawClassNames = classNames(
    //     pawToRender.icon, 
    //     styles.chessMove__paw,
    //     {[styles.chessMove__pawWhite]: pawToRender.color === 'white'}
    //     )
    // return <i className={pawClassNames} key={pawToRender.id}></i>
}
// export default ChessBoard;
