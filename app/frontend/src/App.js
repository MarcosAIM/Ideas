import React from 'react';
import {hot} from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import TopNavBar from './component/TopNavBar/TopNavBar';
import Layout from './component/Layout/Layout';
import Jumbotron from './component/Jumbotron/Jumbotron';

import Home from './pages/Home.js';
import Explore from './pages/Explore.js';
import New from './pages/New.js';
import NoMatch from './pages/NoMatch.js';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <TopNavBar />
          <Jumbotron />
            <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/explore' component={Explore} />
              <Route path='/new-idea' component={New} />
              <Route component = { NoMatch } />
            </Switch>
            </Layout>
        </Router>
      </React.Fragment>
      
    );
  }
}

export default hot(module)(App);
