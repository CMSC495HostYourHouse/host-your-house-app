import React from 'react';
import './Listings.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import PropertyCards from '../PropertyCards/propertyCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainPageSearch from '../MainPageSearch/mainpageSearch';
import { response } from 'express';

export const listings = () => {
    async function getHouse(){
        await fetch("http://localhost:5000/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
          
        }).catch (error => { //if there is an error
            window.alert(error); //make a pop-up of the issue appear
            return; //end the code block
        });
    }
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