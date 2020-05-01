import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Main from './components/Main'
import { Container } from 'reactstrap';
import Footer from './components/Footer';
import { Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className='App' style={{background:'#d9d9d9'}}>
        <NavBar />
        <Content>
          <div className="page-content" />
          <Main />
          </Content>
          
          <Footer/>
          
      </div>
    );
  }
}

export default App;
