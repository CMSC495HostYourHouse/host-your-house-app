import React from 'react';
import './SavedPage.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Savedprop from './SavedProp/saved-prop.js'


export const SavedPageComp = () => {
     return (
        <section>
        <Container className='d-flex p-2 justify-content-center flex-row'>
                <Card className='saved-card' bg='primary' text='light'>
                    <Card.Header><h1>Saved Properties</h1>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col><Savedprop /></Col>
                            <Col><Savedprop /></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}

export default SavedPageComp;