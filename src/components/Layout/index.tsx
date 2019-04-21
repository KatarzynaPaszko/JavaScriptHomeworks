import * as React from 'react';
import { Container } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { allRoutes } from '../../routes';
import Header from './Header';
import Footer from './Footer';
import styles from './index.module.scss';

interface ILayoutProps {
    readonly children: React.ReactNode;
}

class Layout extends React.Component<ILayoutProps & RouteComponentProps<{}>> {
    public state = {
        pageTitle: null,
    }

    public componentDidMount() {
        this.setPageTitle();
    }

    public componentDidUpdate(prevProps: ILayoutProps & RouteComponentProps<{}>) {
        if(this.props.location.pathname !== prevProps.location.pathname) {
            this.setPageTitle();
        }
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
        let pageTitle = this.getPageTitle(this.props.location.pathname);
        if(!pageTitle) {
            pageTitle = 'Tytul strony lalala'
        }
        this.setState({pageTitle});
        document.title = pageTitle;
    }

    private getPageTitle(pathname: string) {
        const pathRoute = allRoutes.find(item => {         
            return item.path === pathname;
        })        
        return pathRoute && pathRoute.path ? pathRoute.name : 'JavaScript Homeworks';
    }
};

export default withRouter(Layout);
