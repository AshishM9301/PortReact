import React, { Component } from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import logo from '../../images/logo.png';
import html from '../../images/html-logo.png';
import css from '../../images/css-logo.png';
import js from '../../images/js-logo.png';
import express from '../../images/expressjs-logo.png';
import ract from '../../images/react.png';
import rdux from '../../images/redux-logo.png';
import node from '../../images/nodejs-logo.png';
import mern from '../../images/mearn-stack-logo.png';
import wordpress from '../../images/wordpress-logo.png';
import icice from '../../images/icicie.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <header className='bg-custom space-p-1'>
          <Container>
            <Row>
              <div className='mx-auto row'>
                <Col md='8' sm='12'>
                  <div className='mx-auto space-p-1'>
                    <div>
                      <h1 className='display-3-custom font-weight-normal'>
                        Welcome to Endev
                      </h1>
                      <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat labore, nobis soluta incidunt debitis eveniet
                        ducimus?
                      </h4>
                      <p>Here you can create your desirred Website</p>
                      <Col sm='12'>
                        <Row>
                          <Button size='lg' className='py-3 px-4'>
                            Recent Projects
                          </Button>
                        </Row>
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col md='4'>
                  <img src={logo} alt='Logo' width='400px' />
                </Col>
              </div>
            </Row>
          </Container>
        </header>

        <div>
          <Container className='space-p-1 pb-0'>
            <Row className='mb-5'>
              <h4 className='bg-lgreen mx-auto py-2 px-4 rounded-lg-1 iblock'>
                Languages
              </h4>
            </Row>
            <Col className='mt-5'>
              <ul className='circle-container mx-auto pt-3'>
                <li>
                  <div className='shadow border border-warning on-circle-3 rounded-circle p-1 lang-img-sm'>
                    <img alt='' src={html} className='img-fluid' />
                  </div>
                </li>

                <li>
                  <div className='shadow border border-warning on-circle-3 rounded-circle p-1 lang-img-sm'>
                    <img alt='' src={css} className='img-fluid' />
                  </div>
                </li>
                <li>
                  <div className='shadow border border-warning on-circle-3 rounded-circle p-1 lang-img-sm'>
                    <img alt='' src={js} className='img-fluid' />
                  </div>
                </li>
                <li>
                  <div className='shadow border border-warning on-circle-3 rounded-circle p-1 lang-img-sm'>
                    <img alt='' src={wordpress} className='img-fluid' />
                  </div>
                </li>

                <li>
                  <div className='shadow border border-warning on-circle-3 rounded-circle p-1 lang-img-sm'>
                    <img alt='' src={ract} className='img-fluid' />
                  </div>
                </li>

                <li>
                  <div className='shadow border border-warning on-circle-3 rounded-circle p-1 lang-img-sm'>
                    <img alt='' src={node} className='img-fluid' />
                  </div>
                </li>

                <li>
                  <div className='shadow border border-warning on-circle-3 rounded-circle p-1 lang-img-sm'>
                    <img alt='' src={rdux} className='img-fluid' />
                  </div>
                </li>

                <li>
                  <div className='shadow border border-warning on-circle-3 rounded-circle p-1 lang-img-sm'>
                    <img alt='' src={express} className='img-fluid' />
                  </div>
                </li>
                <li
                  style={{
                    position: 'relative',
                    width: '200px',
                    top: '6rem',
                    left: '6.35rem',
                  }}>
                  <div className='shadow border border-warning rounded-circle p-1 lang-img-m mx-auto'>
                    <img alt='' src={mern} className='img-fluid' />
                  </div>
                </li>
              </ul>
            </Col>
          </Container>
        </div>
        <section>
          <Container>
            <div className='space-p-1 pb-0 '>
              <Row>
                <h5 className='bg-lgreen mx-auto py-2 px-4 rounded-lg-1 iblock'>
                  Projects
                </h5>
              </Row>
              <Row className=' mb-5 '>
                <h1
                  className='text-center mx-auto iblock px-3 py-1 bg-custom '
                  style={{ borderRadius: '5rem' }}>
                  Some Popular Projects
                </h1>
              </Row>
            </div>
            <div>
              <Col md='4' className='shadow p-5'>
                <Row>
                  <img
                    src={icice}
                    className='d-block mx-auto p-1 img-fluid project-img'
                  />
                </Row>
                <Row className='mt-2'>
                  <h1 className='mx-auto d-block text-center'>First Project</h1>
                </Row>
              </Col>
            </div>
          </Container>
        </section>
        <section>
          <div className='container space-p-1 pb-0'>
            <div className='row'>
              <h4 className='bg-lgreen mx-auto py-2 px-4 rounded-lg-1 iblock'>
                Testimonial
              </h4>
            </div>
            <div className='row mb-5'>
              <h1 className='text-center mx-auto iblock px-3 rounded-lg-2 py-1 bg-custom'>
                Some People that Know me
              </h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
