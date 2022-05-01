import React from 'react';
import './accountPage.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import NavBar from "../NavBar/navBar";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const AccountPage = () => {
     return (
        <section className='background'>
          {/* Bring in the navbar that displays on top of page */}
          {/* <NavBar />Persistent NavBar added in App.js */}
          {/* Container for card */}
          <Container className='d-flex p-2 justify-content-center'>
            {/* Card that displays relavent account information */}
            <Card bg='dark' text='light'>
              <Card.Header><h1>My Account</h1></Card.Header> 
              <Card.Body bg='dark'>
                <Card.Text>
                  <p>
                    user info 
                    user info
                  </p>
                  <p>
                    user info 
                    user info
                  </p>
                  <p>
                    user info 
                    user info
                  </p>
                </Card.Text>
                <Card.Footer>
                  {/* links to account related stuff in a dropdown menu */}
                  <DropdownButton id="dropdown-basic-button" title="Account Actions">
                    <Dropdown.Item href="/saved">Veiw Saved Properties</Dropdown.Item>
                    <Dropdown.Item href="/reserved">Veiw Reserved Properties</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Reset Password</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Change Email</Dropdown.Item>
                  </DropdownButton>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Container>
        </section>
    )
}

