import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import Cards from './Cards';

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
              <Nav.Link href="/login">
              <button className="navbar-light-button">
              Login
              </button>
              </Nav.Link>
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

      {/* about cards */}
      <div className="cards">
      <Cards title={"Our Mission"} description={"Our mission is to empower and connect women in tech. "}/>
      <Cards title={"Our Values"} description={"We value collaboration, and connections between women in tech who are at the beginning of their career"}/>
      <Cards title={"Our Vision"} description={"Our vision is to bridge the gender gap within tech by providing women with the tools and support to succeed."}/>
      </div>
      {/* end about cards */}

      {/* footer */}
      <footer className="footer">

      </footer>
      {/* end footer */}
      </>
    );
}

export default Home;