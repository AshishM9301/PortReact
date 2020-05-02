import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { Container, Col, Row } from 'reactstrap';

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
          <form>
            <div className='form-group mt-5'>
              <label htmlFor='name'>Name</label>
              <input
                type='name'
                className='form-control'
                id='name'
                placeholder='First Last Name'
              />
            </div>
            <div className='form-group mt-4'>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='name@example.com'
              />
            </div>
            <div className='form-group mt-4'>
              <label htmlFor='message'>Message</label>
              <textarea
                className='form-control'
                id='message'
                rows={3}
                defaultValue={''}
              />
            </div>
            <div className='form-group'>
              <button type='button' className='bg-logo btn text-white'>
                Submit
              </button>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}

export default ContactPage;
