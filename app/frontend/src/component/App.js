import React from 'react';
import {hot} from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store';

// layout components
import TopNavBar from './layout/TopNavBar';
import Layout from './layout/Layout';
import Jumbotron from './layout/Jumbotron';

// common components
import Home from "./common/Home";

// user components
import DashBoard from "./user/DashBoard";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
      <React.Fragment>
          <Router>
            <TopNavBar />
            <Jumbotron />
              <Layout>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/dashboard' component={DashBoard} />
              </Switch>
              </Layout>
          </Router>
        </React.Fragment>
      </Provider>
      
    );
  }
}

export default hot(module)(App);
