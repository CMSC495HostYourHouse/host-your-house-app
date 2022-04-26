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
            {/* container for featured card */}
            <Container className='d-flex p-2 justify-content-center'>
                {/* Featured properties that show at top of page, under nav bar */}
                <Card className='featured-card' bg='dark' text='light'>
                    <Card.Header><h1>Featured Properties</h1></Card.Header>
                    <Card.Body>
                        <Row>
                            {/* Bring in test property cards, theese need to be updated to be able to select specific properties from the database, and display their information */}
                            {/* I think this could just be static */}
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