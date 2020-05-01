import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Main from './components/Main';

import BottomFooter from './components/BottomFooter';
import { Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Content>
          <Main />
        </Content>
        <BottomFooter />
      </div>
    );
  }
}

export default App;
