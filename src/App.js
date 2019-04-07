import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./scenes/Home/Home";
import { Container } from 'react-bootstrap';
import { allRoutes } from './routes';

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
        <div>
          {/* <Menu /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            {allRoutes.map( (route, i) => <Route key={i} {...route} />)}
            {/* <Route component={ErrorPage} /> */}
            <Route render={() => <h1>Page not found :(</h1>} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
      </Container>
    );
  }
}

export default App;
