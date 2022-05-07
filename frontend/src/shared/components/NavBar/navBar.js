import React from 'react';
import './navBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {clearToken} from "../../../utils/authToken";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


// navbar that shows on top of page
export const TopMenu = ({ user }) => {

    //keeps the state of the user when navigating pages
    const navigate = useNavigate();
    const handleOnClick = useCallback((endpoint) => navigate(endpoint, {replace: true}), [navigate]);

    if (user.email) {
        return (
            <section className='navBar'>
                <Navbar bg="dark" expand="md" variant='dark' fixed="top">
                    <Navbar.Brand href="/">Host A House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end d-flex pe-5" style={{ width: "100%" }}>
                            {/* Todo: Get name from signed in user */}
                            <Navbar.Text>Hello, {user.name}</Navbar.Text>

                            {/* inline styling to add the profile icon as the title */}
                            <NavDropdown title={ <div className='nav-dropdown-title' style={{display: "inline-block"}}>
                                                    <AccountCircleIcon/></div>} id="nav-dropdown" menuVariant='dark'>
                                <NavDropdown.Item onClick={() => handleOnClick("/account")}>My Account</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleOnClick("/saved")}>Saved Properties</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleOnClick("/reserved")}>Reserved Properties</NavDropdown.Item>
                                <NavDropdown.Item href="/" onClick={clearToken}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </section>
        )
    } else {
        return (
            <section className='navBar'>
                <Navbar bg="dark" expand="md" variant='dark' fixed="top">
                    <Navbar.Brand href="/">Host A House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Nav className="justify-content-end d-flex pe-5" style={{ width: "100%" }}>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>                            
                    </Nav>
                </Navbar>
            </section>
        )
    }
}

export default TopMenu