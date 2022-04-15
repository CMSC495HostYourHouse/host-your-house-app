import React from 'react';
import './featured.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import PropertyCards from '../PropertyCards/propertyCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const featured = () => {
     return (
        <section>
            <Container className='d-flex p-2 justify-content-center'>
                <Card bg='dark' text='light'>
                <Card.Header><h1>Featured Properties</h1></Card.Header>
                    <Card.Body>
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

export default featured;