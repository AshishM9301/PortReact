import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Footer } from 'react-mdl';

class BottomFooter extends Component {
  render() {
    return (
      <Footer className='bg-secondary pt-5'>
        <div className='container-fluid text-light text-center'>
          <Row>
            <Col md='4' lg='2' className='mx-auto'>
              <h4>About</h4>
              <p className='mb-1'>
                <a className='nav-link text-white-50' href='about.html'>
                  About Me
                </a>
              </p>
              <p>
                <a className='nav-link text-white-50' href='vision.html'>
                  Vision
                </a>
              </p>
            </Col>
            <Col md='4' lg='2' className='mx-auto'>
              <h4>Projects</h4>
              <p className='mb-1'>
                <a className='nav-link text-white-50' href='client.html'>
                  Client
                </a>
              </p>
              <p className='mb-1'>
                <a className='nav-link text-white-50' href='templates.html'>
                  Templates
                </a>
              </p>
              <p className='mb-1'>
                <a className='nav-link text-white-50' href='wordpress.html'>
                  Wordpress
                </a>
              </p>
              <p className='mb-1'>
                <a className='nav-link text-white-50' href='react.html'>
                  React
                </a>
              </p>
            </Col>
            <Col md='4' lg='2' className='mx-auto'>
              <h4>Contact</h4>
            </Col>
            <Col md='4' lg='2' className='mx-auto'>
              <h4>Resources</h4>
            </Col>
          </Row>
          <Row className=' mt-4 ml-1'>
            <p>© EnDev 2020</p>
          </Row>
        </div>
      </Footer>
    );
  }
}

export default BottomFooter;
