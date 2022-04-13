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

            <Container className='d-flex p-2 justify-content-center'>
                <Card style={{ width: '80rem', height: '8rem'}} bg='dark' text='light'>
                    <Card.Body>
                      <Form>
                        <Row>
                          <Col>
                            <Form.Group className="mb-3" controlId="destination">
                              <Form.Select>
                                <option>City 1</option>
                                <option>City 2</option>
                                <option>City 3</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3" controlId="price">
                              <Form.Select>
                                <option>Price range 1</option>
                                <option>Price range 2</option>
                                <option>Price range 3</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3" controlId="monthavil">
                              <Form.Select>
                                <option>Month 1</option>
                                <option>Month 2</option>
                                <option>Month 3</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3" controlId="rating">
                              <Form.Select>
                                <option>1 Star</option>
                                <option>2 Star</option>
                                <option>3 Star</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Button variant="primary" type="submit" className="justify-content-end" style={{ width: "100%" }}>
                          Submit
                        </Button>
                      </Form>
                        
                    </Card.Body>
                </Card>
            </Container>

            
        </section>
    )
}

export default mainPageSearch;