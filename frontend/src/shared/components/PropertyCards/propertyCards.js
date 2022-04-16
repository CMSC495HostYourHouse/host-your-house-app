import React from 'react';
import './propertyCards.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const propertyCards = () => {
     return (
        <section>
            <Container className='d-flex p-2'>
                <Card style={{ width: '18.1rem', height: '28rem', text:'black'}} bg='light' text='dark' border="primary" className='container-fluid'>
                  <Card.Header id='propertycardHeader'>Example Property</Card.Header>
                  <Card.Img style={{width:"22.5rel", height:"20rel"}} src='https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_960_720.jpg'/>
                  <Card.Body bg='dark'>
                    <Card.Text>
                      <p>Location: Somewhere</p>
                      <p>Price: 100/Night</p>
                      <p>Rating: 4 Star</p>
                      <p>Vaccant: Yes</p>
                    </Card.Text>
                    <Button variant="primary">Reserve</Button>
                    <Button variant="success">Save</Button>
                  </Card.Body>
                </Card>
            </Container>
        </section>
    )
}

export default propertyCards;