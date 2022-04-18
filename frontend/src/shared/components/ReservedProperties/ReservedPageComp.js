import React from 'react';
import './ReservedProperties.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReservedProp from './ReservedProp/ReservedProp.js'


export const ReservedPageComp = () => {
     return (
        <section>
        <Container className='d-flex p-2 justify-content-center flex-row'>
                <Card className='reserved-card' bg='primary' text='light'>
                    <Card.Header><h1>Reserved Properties</h1>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col><ReservedProp /></Col>
                            <Col><ReservedProp /></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}

export default ReservedPageComp;