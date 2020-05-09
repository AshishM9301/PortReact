import React, { Component } from 'react';
import { Header } from 'react-mdl';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import ui from '../../images/Basic_Ui_68-1.jpg';
import html from '../../images/html-logo.png';
import css from '../../images/css-logo.png';
import js from '../../images/js-logo.png';
import express from '../../images/expressjs-logo.png';
import ract from '../../images/react.png';
import rdux from '../../images/redux-logo.png';
import node from '../../images/nodejs-logo.png';
import mern from '../../images/mearn-stack-logo.png';
import wordpress from '../../images/wordpress-logo.png';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <Header className='bg-midnight-gradient text-white'>
          <div className='container-fluid space-p-1 my-5'>
            <Row className='row vertical-divider'>
              <Col md='6'>
                <img
                  className='img-fluid mx-auto d-block p-4 shadow rounded-circle'
                  src={ui}
                  alt=''
                />
              </Col>
              <Col md='6' className='mt-5' style={{ display: 'flex' }}>
                <Row>
                  <div
                    className='align-self-center border border-secondary mb-3 mx-auto'
                    style={{ padding: '2rem 7rem 2rem 2rem' }}>
                    <h1 className='font-weight-light'>
                      My Name is
                      <span className='font-weight-bold'> Ashish kr Mahto</span>
                    </h1>
                    <ul className='text-justify'>
                      <li>
                        <h3>Self Taught</h3>
                      </li>
                      <li>
                        <h3>Business Mind</h3>
                      </li>
                      <li>
                        <h3>Technology Enthusiast</h3>
                      </li>
                      <li>
                        <h3>Realistic</h3>
                      </li>
                      <li>
                        <h3>Code Learner</h3>
                      </li>
                      <li>
                        <h3>Full Stack Dev</h3>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Header>
        <main>
          <Container>
            <Container className='space-p-1 pb-0'>
              <Row>
                <h4 className='bg-lgreen mx-auto py-2 px-4 rounded-lg-1 iblock'>
                  Languages
                </h4>
              </Row>
              <Row className='mb-5'>
                <h1 className='text-center mx-auto iblock px-3 rounded-lg-2 mt-2 py-1 bg-custom'>
                  Some Codes that I know
                </h1>
              </Row>
              <div className='mb-4'>
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      <div className='iline pl-3'>
                        <div className='shadow border border-warning rounded-circle p-1 lang-img-sm'>
                          <img alt='' src={mern} className='img-fluid' />
                        </div>
                      </div>
                      <div className=' iline align-self-center pl-3 text-muted'>
                        <h1>MERN Stack</h1>
                      </div>
                      <div
                        className=' iline align-self-center pl-3 col'
                        style={{ flexWrap: 'wrap' }}>
                        <p>
                          Mongoose - M , Express - E , React -R , Node - N . I
                          learned MERN stack with redux support and created
                          login pages, register pages and logout pages
                          <a
                            className='nav-link p-1 d-inline'
                            href='https://www.geeksforgeeks.org/mern-stack/'>
                            MERN Stack
                          </a>
                          Sites
                        </p>
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className='iline pl-3'>
                        <div className='shadow border border-warning  rounded-circle p-1 lang-img-sm'>
                          <img alt='' src={html} className='img-fluid' />
                        </div>
                      </div>
                      <div className=' iline align-self-center pl-3 text-muted'>
                        <h1>HTML 5</h1>
                      </div>
                      <div
                        className=' iline align-self-center pl-3 col'
                        style={{ flexWrap: 'wrap' }}>
                        <p>
                          I am Basicly Full stack developer , i have started
                          coding with Front End which incude HTML, so almost all
                          my project contains HTMl
                          <a
                            className='nav-link p-1 d-inline'
                            href='https://html.com/'>
                            HTML
                          </a>
                          Sites
                        </p>
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className='iline pl-3'>
                        <div className='shadow border border-warning  rounded-circle p-1 lang-img-sm'>
                          <img alt='' src={css} className='img-fluid' />
                        </div>
                      </div>
                      <div className=' iline align-self-center pl-3 text-muted'>
                        <h1>Css-3</h1>
                      </div>
                      <Col
                        className=' iline align-self-center pl-3'
                        style={{ flexWrap: 'wrap' }}>
                        <p>
                          Created many projects using flex &amp; grid System and
                          used Bootstrap &amp; TailindCss also use Bootstrap for
                          creating
                          <a
                            className='nav-link p-1 d-inline'
                            href='https://www.w3.org/Style/CSS/'>
                            CSS
                          </a>
                          Sites
                        </p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className='iline pl-3'>
                        <div className='shadow border border-warning  rounded-circle p-1 lang-img-sm'>
                          <img alt='' src={js} className='img-fluid' />
                        </div>
                      </div>
                      <div className=' iline align-self-center pl-3 text-muted'>
                        <h1>Java Script</h1>
                      </div>
                      <Col
                        className=' iline align-self-center pl-3'
                        style={{ flexWrap: 'wrap' }}>
                        <p>
                          Vanila JavaScript is not my sepaciality but i can read
                          all js files and manipulte it according to demand.
                          <a
                            className='nav-link p-1 d-inline'
                            href='https://www.javascript.com/'>
                            JavaScript
                          </a>
                          Sites
                        </p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className='iline pl-3'>
                        <div className='shadow border border-warning  rounded-circle p-1 lang-img-sm'>
                          <img alt='' src={wordpress} className='img-fluid' />
                        </div>
                      </div>
                      <div className=' iline align-self-center pl-3 text-muted'>
                        <h1>Wordpress</h1>
                      </div>
                      <Col
                        className=' iline align-self-center pl-3'
                        style={{ flexWrap: 'wrap' }}>
                        <p>
                          I started Web Development with Wordpress Creating new
                          sites, made Some projects for personal use which is
                          not currently active. I learned i can hard code all
                          stuff in wordpress later and learning to customise
                          Wordpress today also
                          <a
                            className='nav-link p-1 d-inline'
                            href='https://wordpress.org/'>
                            Wordpress
                          </a>
                          Sites
                        </p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className='iline pl-3'>
                        <div className='shadow border border-warning  rounded-circle p-1 lang-img-sm'>
                          <img alt='' src={ract} className='img-fluid' />
                        </div>
                      </div>
                      <div className=' iline align-self-center pl-3 text-muted'>
                        <h1>React</h1>
                      </div>
                      <Col
                        className=' iline align-self-center pl-3'
                        style={{ flexWrap: 'wrap' }}>
                        <p>
                          When I first Learned React i was facinated by its
                          speed . React helped me to write code and made Website
                          world can be customised to anything
                          <a
                            className='nav-link p-1 d-inline'
                            href='https://reactjs.org/'>
                            React
                          </a>
                          Sites
                        </p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className='iline pl-3'>
                        <div className='shadow border border-warning rounded-circle p-1 lang-img-sm'>
                          <img alt='' src={node} className='img-fluid' />
                        </div>
                      </div>
                      <div className=' iline align-self-center pl-3 text-muted'>
                        <h1>Node</h1>
                      </div>
                      <Col
                        className=' iline align-self-center pl-3'
                        style={{ flexWrap: 'wrap' }}>
                        <p>
                          Node is essential for React ,MERN etc. as its manages
                          all the pakages. I learned its a javascript that can
                          be used to create backend sever codes
                          <a
                            className='nav-link p-1 d-inline'
                            href='https://nodejs.org/'>
                            Node
                          </a>
                          Sites
                        </p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className='iline pl-3'>
                        <div className='shadow border border-warning rounded-circle p-1 lang-img-sm'>
                          <img alt='' src={rdux} className='img-fluid' />
                        </div>
                      </div>
                      <div className=' iline align-self-center pl-3 text-muted'>
                        <h1>React Redux</h1>
                      </div>
                      <Col
                        className=' iline align-self-center pl-3'
                        style={{ flexWrap: 'wrap' }}>
                        <p>
                          I Created all MERN projects with react-redux as it
                          helps to control backend and frontend with easy . I
                          dont know exact redux to use in all platform , know
                          only to use on react
                          <a
                            className='nav-link p-1 d-inline'
                            href='https://react-redux.js.org/'>
                            React Redux
                          </a>
                          Sites
                        </p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className='iline pl-3'>
                        <div className='shadow border border-warning rounded-circle p-1 lang-img-sm'>
                          <img alt='' src={express} className='img-fluid' />
                        </div>
                      </div>
                      <div className=' iline align-self-center pl-3 text-muted'>
                        <h1>Express</h1>
                      </div>
                      <Col
                        className=' iline align-self-center pl-3'
                        style={{ flexWrap: 'wrap' }}>
                        <p>
                          Its used to create WWebsite server side codes as with
                          node it produces ton of codes which can be lessned
                          with use of Express
                          <a
                            className='nav-link p-1 d-inline'
                            href='https://www.express.com/'>
                            Express Node
                          </a>
                          Sites
                        </p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Container>
          </Container>
        </main>
      </div>
    );
  }
}

export default AboutPage;
