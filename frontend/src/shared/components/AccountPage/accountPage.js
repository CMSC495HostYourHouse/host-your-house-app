import React from 'react';
import './accountPage.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "../NavBar/navBar";
import Button from 'react-bootstrap/esm/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const AccountPage = () => {
     return (
        <section className='background'>
          <NavBar />
          <Container className='d-flex p-2 justify-content-center'>
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
                        <DropdownButton id="dropdown-basic-button" title="Account Actions">
                        <Dropdown.Item href="/mysaved">Veiw Saved Properties</Dropdown.Item>
                        <Dropdown.Item href="/myreserved">Veiw Reserved Properties</Dropdown.Item>
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

