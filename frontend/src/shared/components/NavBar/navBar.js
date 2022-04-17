import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const TopMenu = () => {
     return (
        <section className='navBar'>
            <Navbar bg="dark" expand="md" variant='dark' fixed="top">
                <Navbar.Brand href="/main">Host A House</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end d-flex pe-5" style={{ width: "100%" }}>
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