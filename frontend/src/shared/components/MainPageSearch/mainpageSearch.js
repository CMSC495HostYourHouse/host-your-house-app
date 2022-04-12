import React from 'react';
import './mainPageSearch.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from  'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const mainPageSearch = () => {
     return (
        <section>
            <Container className='d-flex p-2 justify-content-center'>
                <Card style={{ width: '80rem', height: '8rem'}} bg='dark' text='light'>
                    <Card.Body>
                      <Form>
                        <Row>
                          <Col>
                            <Form.Group className="mb-3" controlId="destination">
                              <Form.Control type="text" placeholder="Traveling To" />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3" controlId="startday">
                              <Form.Control type="text" placeholder="From" />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3" controlId="endday">
                              <Form.Control type="text" placeholder="To" />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3" controlId="numberpeope">
                              <Form.Control type="text" placeholder="Travelers" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Button variant="primary" type="submit" className="justify-content-end" style={{ width: "100%" }}>
                          search
                        </Button>
                      </Form>
                        
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}

export default mainPageSearch;