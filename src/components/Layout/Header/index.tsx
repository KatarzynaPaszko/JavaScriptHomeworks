import * as React from 'react';
import classNames from "classnames";
import styles from './index.module.scss';
// import Hamburger from './Hamburger.tsx'
// import MainNavigation from './MainNavigation.tsx'
import { Container } from 'react-bootstrap';

interface IHeaderProps extends IClassNameProp {
    mainNavigationOpened?: boolean;
    toggleMainNavigation?: () => void;
    title: string | null;
}

const Header: React.StatelessComponent<IHeaderProps> = ({
    mainNavigationOpened,
    toggleMainNavigation,
    title, 
    className
}) => {
    const headerClassNames = classNames(styles.header, className)
    return (
        <header className={headerClassNames}>
            <Container>
                <h1 className={styles.header__title}>{title}</h1>
                {/* <Hamburger 
                    // className={styles.header__hamburger}
                    // onClick={toggleMainNavigation}
                    // showClose={mainNavigationOpened}
                />
                <MainNavigation /> */}
            </Container>
            
        </header>
    )
    
};

export default Header;
