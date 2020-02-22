import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';

const Navigation = () => {
    return(
    <Navbar expand="md" className='pb-4'>
      <Navbar.Brand href="/">Mauve</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/login">
              <button className="navbar-light-button">
              Login
              </button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigation;