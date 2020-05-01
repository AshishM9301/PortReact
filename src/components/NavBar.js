import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import ContactPage from './content/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class NavBar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById('navbar');
      if (isTop) {
        nav.classList.add('fixed-top');
        nav.classList.add('shadow');
      } else {
        nav.classList.remove('fixed-top');
        nav.classList.remove('shadow');
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  render() {
    return (
      <div className='container'>
        <Navbar
          expand='md'
          className='navbar navbar-expand-lg navbar-light mt-4 mb-0navbar navbar-expand-lg navbar-light mt-4 mb-0'>
          <NavbarBrand className='navbar-brand text-primary mx-auto' href='/'>
            <h3> EnDev </h3>
          </NavbarBrand>
        </Navbar>
        <Navbar
          className='navbar navbar-expand-lg mb-4 navbar-light bg-white'
          light
          expand='md'
          id='navbar'>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='navbar-nav mx-auto font-weight-bolder' navbar>
              <NavItem>
                <NavLink href='/'> Home </NavLink>
              </NavItem>
              <NavItem>
              <NavLink href = '/about' >
            About 
            </NavLink>
              </NavItem>
              <NavItem>
              <NavLink href='/contact'>Contact </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Projects
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem> Client Projects </DropdownItem>
                  <DropdownItem> Templates </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}

export default NavBar;
