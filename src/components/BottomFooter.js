import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Footer } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

class BottomFooter extends Component {
  render() {
    return (
      <Footer className='bg-blue pt-5'>
        <div className='container-fluid text-light text-center'>
          <Row>
            <Col md='4' lg='2' className='mx-auto'>
              <h4>About</h4>
              <p className='mb-1'>
                <a
                  className='nav-link text-no-decoration text-white-50'
                  href='about.html'>
                  About Me
                </a>
              </p>
              <p>
                <a
                  className='nav-link text-no-decoration text-white-50'
                  href='vision.html'>
                  Vision
                </a>
              </p>
            </Col>
            <Col md='4' lg='2' className='mx-auto'>
              <h4>Projects</h4>
              <p className='mb-1'>
                <a
                  className='nav-link text-no-decoration text-white-50'
                  href='client.html'>
                  Client
                </a>
              </p>
              <p className='mb-1'>
                <a
                  className='nav-link text-no-decoration text-white-50'
                  href='templates.html'>
                  Templates
                </a>
              </p>
              <p className='mb-1'>
                <a
                  className='nav-link text-no-decoration text-white-50'
                  href='wordpress.html'>
                  Wordpress
                </a>
              </p>
              <p className='mb-1'>
                <a
                  className='nav-link text-no-decoration text-white-50'
                  href='react.html'>
                  React
                </a>
              </p>
            </Col>
            <Col md='4' lg='2' className='mx-auto'>
              <h4>Contact</h4>
              <Row className='mx-auto'>
                <Col>
                  <Col className='ml-5'>
                    <a
                      target='_blank'
                      href='https://www.facebook.com/endev.ashish'
                      className=' text-no-decoration text-white-50'>
                      <Row>
                        <FontAwesomeIcon
                          icon={['fab', 'facebook-square']}
                          className='h4 m-2'
                        />
                        <p className='d-inline nav-link text-left'>
                          /endev.ashish
                        </p>
                      </Row>
                    </a>
                  </Col>
                  <Col className='ml-5'>
                    <a
                      target='_blank'
                      className='text-no-decoration text-white-50'
                      href='https://www.instagram.com/ashish13005/'>
                      <Row>
                        <FontAwesomeIcon
                          icon={['fab', 'instagram']}
                          className='h4 m-2'
                        />
                        <p className='d-inline nav-link text-left'>
                          /ashish13005
                        </p>
                      </Row>
                    </a>
                  </Col>
                  <Col className='ml-5'>
                    <a
                      target='_blank'
                      className='text-no-decoration text-white-50'
                      href='mailto:giftofgodashish@gmail.com?subject=Contact'>
                      <Row>
                        <FontAwesomeIcon
                          icon={['fab', 'google']}
                          className='h4 m-2'
                        />
                        <p className='d-inline nav-link text-left'>
                          /giftofgodashish
                        </p>
                      </Row>
                    </a>
                  </Col>
                  <Col className='ml-5'>
                    <a
                      target='_blank'
                      className=' text-no-decoration text-white-50'
                      href='https://github.com/asfafasa'>
                      <Row>
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          className='h4 m-2'
                        />
                        <p className='d-inline nav-link text-left'>/asfafasa</p>
                      </Row>
                    </a>
                  </Col>
                </Col>
              </Row>
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
