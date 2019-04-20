import * as React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import styles from './index.module.scss';

interface ILayoutProps {
    readonly children: React.ReactNode;
}

class Layout extends React.Component<ILayoutProps> {
    public state = {
        pageTitle: null,
    }

    public componentDidMount() {
        this.setPageTitle();
    }

    public render() {
        return (
            <div className={styles.layout}>
                <Header 
                    title={this.state.pageTitle} 
                    className={styles.layout__header}
                />
                <main className={styles.layout__mainContainer}>
                    <Container>
                        {this.props.children}
                    </Container>
                </main>
                <Footer className={styles.layout__footer}/>
            </div>
        );
    }

    private setPageTitle = () => {

    }
    
};

export default Layout;
