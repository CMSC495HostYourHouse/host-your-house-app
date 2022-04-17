import React from 'react';
import './Listings.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import PropertyCards from '../PropertyCards/propertyCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainPageSearch from '../MainPageSearch/mainpageSearch';

export const listings = () => {
     return (
        <section>
            <Container className='d-flex p-2 justify-content-center flex-row'>
                <Card className='listings-card' bg='dark' text='light'>
                    <Card.Header><h1>All Properties</h1>
                        <MainPageSearch />
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
                            <Col><PropertyCards /></Col>
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

export default listings;