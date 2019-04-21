import React from 'react';
import classNames from "classnames";
import { pawsSet } from '../../services/paws';
import styles from './index.module.scss';


interface IPawProps {
    pawId: number;
}

const Paw: React.StatelessComponent<IPawProps> = ({
    pawId
}) => {
    const pawToRender = pawsSet.find(paw => {
        return paw.id === pawId
    });

    if (pawToRender != undefined) {
        const pawClassNames = classNames(
            pawToRender.icon, 
            styles.paw,
            {[styles.paw__pawWhite]: pawToRender.color === 'white'}
            )
        return <i className={pawClassNames} key={pawToRender.id}></i> 
    }
    return null;
}
export default Paw;
