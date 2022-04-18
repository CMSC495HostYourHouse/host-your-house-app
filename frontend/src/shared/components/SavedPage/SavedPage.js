import React from 'react';
import './SavedPage.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import PropertyCards from '../PropertyCards/propertyCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "../NavBar/navBar";

export const SavedPage = () => {
     return (
        <section className='background'>
          <NavBar />
            <Container className='d-flex p-2 justify-content-center'>
                <Card bg='dark' text='light'>
                <Card.Header><h1>My Saved Properties</h1></Card.Header>
                    <Card.Body>
                        modify calebs reservation for here
                        <Row>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}

export default SavedPage;