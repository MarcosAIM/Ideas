import React from 'react';
import {hot} from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store';

// alerts
import { Provider as AlertProvider} from 'react-alert';
import  AlertTemplate from 'react-alert-template-basic';

// layout components
import TopNavBar from './layout/TopNavBar';
import Layout from './layout/Layout';
import Jumbotron from './layout/Jumbotron';
import Alerts from './Layout/Alerts';

// common components
import Home from "./common/Home";
import IdeaForm from "./common/IdeaForm";

// user components

// Alert Options
const AlertOptions = {
  timeout: 3000,
  position: 'top center'
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...AlertOptions} >
            <Router>
              <React.Fragment>
              <TopNavBar />
              <Jumbotron />
              <Alerts/>
                <Layout>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/new-idea' component={IdeaForm} />
                </Switch>
                </Layout>
                </React.Fragment>    
            </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default hot(module)(App);
