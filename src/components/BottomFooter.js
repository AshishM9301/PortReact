import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Footer } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class BottomFooter extends Component {
  render() {
    return (
      <Footer className='bg-blue pt-5'>
        <div className='container-fluid text-light text-center'>
          <Row>
            <Col md='4' sm='6' lg='2' className='mx-auto'>
              <h4>About</h4>
              <p className='mb-1'>
                <Link
                  className='nav-link text-no-decoration text-white-50'
                  to='/about'>
                  About Me
                </Link>
              </p>
              <p>
                <Link
                  className='nav-link text-no-decoration text-white-50'
                  to='/vision'>
                  Vision
                </Link>
              </p>
            </Col>
            <Col md='4' sm='6' lg='2' className='mx-auto'>
              <h4>Projects</h4>
              <p className='mb-1'>
                <Link
                  className='nav-link text-no-decoration text-white-50'
                  to='/client'>
                  Client
                </Link>
              </p>
              <p className='mb-1'>
                <Link
                  className='nav-link text-no-decoration text-white-50'
                  to='/template'>
                  Templates
                </Link>
              </p>
              {/*   <p className='mb-1'>
                <Link
                  className='nav-link text-no-decoration text-white-50'
                  to='/wordpress'>
                  Wordpress
                </Link>
              </p>
              <p className='mb-1'>
                <Link
                  className='nav-link text-no-decoration text-white-50'
                  to='react'>
                  React
                </Link>
              </p>
              */}
            </Col>
            <Col md='4' sm='6' lg='2' className='mx-auto'>
              <h4>Contact</h4>
              <Row className='mx-auto'>
                <Col>
                  <Col className='ml-5'>
                    <Link
                      target='_blank'
                      to='https://www.facebook.com/endev.ashish'
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
                    </Link>
                  </Col>
                  <Col className='ml-5'>
                    <Link
                      target='_blank'
                      className='text-no-decoration text-white-50'
                      to='https://www.instagram.com/ashish13005/'>
                      <Row>
                        <FontAwesomeIcon
                          icon={['fab', 'instagram']}
                          className='h4 m-2'
                        />
                        <p className='d-inline nav-link text-left'>
                          /ashish13005
                        </p>
                      </Row>
                    </Link>
                  </Col>
                  <Col className='ml-5'>
                    <Link
                      target='_blank'
                      className='text-no-decoration text-white-50'
                      to='mailto:giftofgodashish@gmail.com?subject=Contact'>
                      <Row>
                        <FontAwesomeIcon
                          icon={['fab', 'google']}
                          className='h4 m-2'
                        />
                        <p className='d-inline nav-link text-left'>
                          /giftofgodashish
                        </p>
                      </Row>
                    </Link>
                  </Col>
                  <Col className='ml-5'>
                    <Link
                      target='_blank'
                      className=' text-no-decoration text-white-50'
                      to='https://github.com/asfafasa'>
                      <Row>
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          className='h4 m-2'
                        />
                        <p className='d-inline nav-link text-left'>/asfafasa</p>
                      </Row>
                    </Link>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col md='4' sm='6' lg='2' className='mx-auto'>
              <h4>Resources</h4>
              <p className='mb-1'>
                <Link
                  className='nav-link text-no-decoration text-white-50'
                  to='/template'>
                  Help
                </Link>
              </p>
              <p className='mb-1'>
                <Link
                  className='nav-link text-no-decoration text-white-50'
                  to='/template'>
                  Terms
                </Link>
              </p>
              <p className='mb-1'>
                <Link
                  className='nav-link text-no-decoration text-white-50'
                  to='/template'>
                  Privacy
                </Link>
              </p>
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
