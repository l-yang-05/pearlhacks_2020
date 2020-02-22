import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';

const Home = () => {
    return (
      <>
      {/* navbar */}
    <Navbar expand="md" className='pb-4'>
      <Navbar.Brand href="/">Mauve</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="#portfolio">
                Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* end navbar */}

      {/* photo */}
      <div className="home-img">

      <img src="img/womenintech.jpg"/>
      </div>
      {/* end photo */}
      </>
    );
}

export default Home;