import * as React from 'react';
import classNames from "classnames";
import styles from './index.module.scss';
import { Container } from 'react-bootstrap';

interface IFooreProps extends IClassNameProp {

}

const Footer: React.StatelessComponent<IFooreProps>= ({
    className
}) => {
    const footerClassNames = classNames(className, styles.footer);
    const heartIcon = classNames('fa fa-heart', styles.footer__icon)
    const coffeIcon = classNames('fa fa-coffee', styles.footer__icon)
    return (
        <footer className={footerClassNames}>
            <Container>
                <p>Made with <i className={heartIcon}></i>{' '} 
                &amp; <i className={coffeIcon}></i>  by 
                WebDeveloperka Katarzyna Paszko
                </p>
            </Container>
        </footer>
    )
};

export default Footer;
