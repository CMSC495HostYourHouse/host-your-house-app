import React from 'react';
import './featured.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

export const featured = () => {
     return (
        <section>
            <Container className='d-flex p-2 justify-content-center'>
                <Card style={{ width: '80rem', height: '50rem'}} bg='dark' text='light'>
                <Card.Header>Featured Properties</Card.Header>
                    <Card.Body>
                    
                        
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}

export default featured;