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

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/about' component={AboutPage} />

            <Route exact path='/contact' component={ContactPage} />
          </Switch>
          <BottomFooter />
        </div>
      </Router>
    );
  }
}

export default App;
