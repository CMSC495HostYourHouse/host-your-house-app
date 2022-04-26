import React from 'react';
import './navBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

// navbar that shows on top of page

export const TopMenu = () => {
     return (
        <section className='navBar'>
            <Navbar bg="dark" expand="md" variant='dark' fixed="top">
                <Navbar.Brand href="/">Host A House</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end d-flex pe-5" style={{ width: "100%" }}>
                        {/* dropdown selection for navigation of website */}
                        <NavDropdown title="Account" id="nav-dropdown" menuVariant='dark' >
                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                            <NavDropdown.Item href="/account">My Account</NavDropdown.Item>
                            <NavDropdown.Item href="/saved">Saved Properties</NavDropdown.Item>
                            <NavDropdown.Item href="/reserved">Reserved Properties</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
    )
}

export default TopMenu