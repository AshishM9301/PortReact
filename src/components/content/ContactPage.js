import React, { Component } from 'react';

import { Container } from 'reactstrap';

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <form>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='name'
                className='form-control'
                id='name'
                placeholder='First Last Name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='name@example.com'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                className='form-control'
                id='message'
                rows={3}
                defaultValue={''}
              />
            </div>
            <div className='form-group'>
              <button type='button' className='btn btn-dark'>
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
