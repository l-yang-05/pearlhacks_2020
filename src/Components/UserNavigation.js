import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/imgs/mauve-logo.png';

const UserNavigation = () => {
    return (
        <Navbar expand="md" className='pb-4'>
            <Navbar.Brand>
                <img src={logo} alt="logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/dashboard">
                            Home
            </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/account">
                            Account
            </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">
                            Log Out
            </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default UserNavigation;