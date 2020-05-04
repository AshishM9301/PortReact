import React, { Component } from 'react';
import logo from '../../images/logo.png';
import googlef from '../../images/google-form-logo.png';

import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

class ContactPage extends Component {
  render() {
    return (
      <div>
        <div
          className='container-fluid shadow-custom'
          style={{ background: '#f2f2f2' }}>
          <Row>
            <Col md='6' className='mx-auto text-right'>
              <h1
                className='align-middle'
                style={{
                  position: 'relative',
                  lineHeight: '390px',
                  fontSize: '180px',
                  height: '400px',
                }}>
                En
                <span className='bg-logo px-3 py-0 rounded-lg text-light'>
                  Dev
                </span>
              </h1>
            </Col>
            <Col md='6' className='ml-0'>
              <img
                src={logo}
                alt=''
                className='img-fliud d-block'
                style={{ width: '500px' }}
              />
            </Col>
          </Row>
        </div>
        <Container>
          <div className='space-p-1 mt-3 pb-0 '>
            <Row>
              <h5 className='bg-lgreen mx-auto py-2 px-4 rounded-lg-1 iblock'>
                To Contact us
              </h5>
            </Row>
            <Row className=' mt-3 '>
              <h1
                className='text-center mx-auto iblock px-3 py-1 bg-custom '
                style={{ borderRadius: '5rem' }}>
                Use These Links to Follow us
              </h1>
            </Row>
          </div>
        </Container>
        <Container className='my-5'>
          <Row>
            <Col
              md='2'
              className='p-4 rounded shadow-custom bg-primary mx-auto bg-hover'>
              <div className='mx-auto'>
                <a
                  target='_blank'
                  href='https://www.facebook.com/endev.ashish'
                  className=' bg-hover'>
                  <FontAwesomeIcon
                    icon={['fab', 'facebook-f']}
                    className='display-2 m-2 mx-auto d-block'
                  />
                </a>
              </div>
            </Col>
            <Col
              md='2'
              className='p-4 rounded shadow-custom bg-instagram mx-auto bg-hover'
              href=''>
              <div className='mx-auto'>
                <a
                  target='_blank'
                  className='bg-hover'
                  href='https://www.instagram.com/ashish13005/'>
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className='display-2 m-2 mx-auto d-block'
                  />
                </a>
              </div>
            </Col>
            <Col
              md='2'
              className='p-4 rounded shadow-custom bg-google bg-hover mx-auto'>
              <div className='mx-auto'>
                <a
                  target='_blank'
                  className='bg-hover'
                  href='mailto:giftofgodashish@gmail.com?subject=Contact'>
                  <FontAwesomeIcon
                    icon={['fab', 'google']}
                    className='display-2 m-2 mx-auto d-block'
                  />
                </a>
              </div>
            </Col>
            <Col
              md='2'
              className='p-4 rounded shadow-custom bg-dark bg-hover mx-auto'>
              <div className='mx-auto'>
                <a
                  target='_blank'
                  className=' bg-hover'
                  href='https://github.com/asfafasa'>
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className='display-2 m-2 mx-auto d-block'
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className='py-5 pb-0 '>
            <Row>
              <h5 className='bg-lgreen mx-auto py-2 px-4 rounded-lg-1 iblock'>
                Request
              </h5>
            </Row>
            <Row className=' mt-3 '>
              <h1
                className='text-center mx-auto iblock px-3 py-1 bg-custom '
                style={{ borderRadius: '5rem' }}>
                For any Special Request
              </h1>
            </Row>
          </div>
        </Container>
        <Container className='bg-dark shadow-custom mb-5'>
          <Row className='mb-3'>
            <Col
              md='3'
              className='p-4 shadow-custom bg-white text-white bg-hover mx-auto bg-hover'>
              <div className='mx-auto'>
                <a
                  className='text-white bg-hover'
                  href='https://forms.gle/JPtWZojqYRPyw4U2A'
                  target='_blank'>
                  <img
                    src={googlef}
                    className='lang-img-m img-fluid d-block mx-auto'
                  />
                </a>
              </div>
            </Col>
            <Col md='3' className='p-4 rounded  text-white mx-auto'>
              <div className='mx-auto'>
                <a
                  target='_blank'
                  className='text-white text-no-decoration'
                  href='https://forms.gle/JPtWZojqYRPyw4U2A'>
                  <h1
                    style={{ height: '200px', lineHeight: '200px' }}
                    className='text-center'>
                    Google Form
                  </h1>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContactPage;
