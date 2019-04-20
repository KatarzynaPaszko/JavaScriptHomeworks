import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./scenes/Home/Home";
import Layout from './components/Layout/index';
import { allRoutes } from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            {allRoutes.map((route, i) => <Route key={i} {...route} />)}
            {/* <Route component={ErrorPage} /> */}
            <Route render={() => <h1>Page not found :(</h1>} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
