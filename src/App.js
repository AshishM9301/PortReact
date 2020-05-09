import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import NavBar from './components/NavBar';
import Main from './components/Main';

import BottomFooter from './components/BottomFooter';
import { Content } from 'react-mdl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/content/Home';
import AboutPage from './components/content/AboutPage';
import ContactPage from './components/content/ContactPage';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faInstagram,
  faFacebook,
  faGithub,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
library.add(fab, faInstagram, faFacebook, faGithub, faGoogle);

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Main />
          <BottomFooter />
        </div>
      </Router>
    );
  }
}

export default App;
