import React from 'react';
import './mainPageSearch.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from  'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion'

export const mainPageSearch = () => {
     return (
        <section>
            <Container>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Search</Accordion.Header>
                  <Accordion.Body className='accordStyle1'>
                    <Row>
                      <Col><h3>Search</h3></Col>
                      <Col style={{textAlign: 'center'}}><a>City</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Price</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Stars</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Month</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Day</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Year</a></Col>
                      <Col></Col>
                    
                    </Row>
                      <Form>
                        <Row className='d-flex align-items-center'>
                          <Col><a></a></Col>
                          <Col>
                            <Form.Group controlId="destination">
                              <Form.Select>
                                <option>City 1</option>
                                <option>City 2</option>
                                <option>City 3</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group controlId="price">
                              <Form.Select>
                                <option>Price range 1</option>
                                <option>Price range 2</option>
                                <option>Price range 3</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group controlId="rating">
                              <Form.Select>
                                <option>1 Star</option>
                                <option>2 Star</option>
                                <option>3 Star</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group controlId="monthavil">
                              <Form.Select>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group controlId="dayAvail">
                              <Form.Select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group controlId="yearavil">
                              <Form.Select>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col><Button variant="success" type="submit">
                          Search
                        </Button></Col>
                        </Row>
                        
                      </Form>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Sort</Accordion.Header>
                  <Accordion.Body className='accordStyle1'>
                      <Form>
                        <Row className='d-flex align-items-center'>
                          <Col><h3>Sort</h3></Col>
                          <Col style={{textAlign: 'right'}}><a>City</a></Col>
                          <Col xs={2}>
                            <Form.Group controlId="destinationSort">
                              <Form.Select>
                                <option>City Name Descending</option>
                                <option>City Name Ascending</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col style={{textAlign: 'right'}}><a>Price</a></Col>
                          <Col xs={2}>
                            <Form.Group controlId="priceSort">
                              <Form.Select>
                                <option>Price Ascending</option>
                                <option>Price Descending</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col style={{textAlign: 'right'}}><a>Rating</a></Col>
                          <Col xs={2}>
                            <Form.Group controlId="ratingSort">
                              <Form.Select>
                                <option>Rating Ascending</option>
                                <option>Rating Descending</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                         
                          <Col><Button variant="success" type="submit">
                          Sort
                        </Button></Col>
                        </Row>
                      </Form>  
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
                {/* <Card bg='primary' text='light'>
                    <Card.Body>
                    <Row>
                      <Col><h3>Search</h3></Col>
                      <Col style={{textAlign: 'center'}}><a>City</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Price</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Stars</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Month</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Day</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Year</a></Col>
                      <Col></Col>
                    
                    </Row>
                      <Form>
                        <Row className='d-flex align-items-center'>
                          <Col><a></a></Col>
                          <Col>
                            <Form.Group controlId="destination">
                              <Form.Select>
                                <option>City 1</option>
                                <option>City 2</option>
                                <option>City 3</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group controlId="price">
                              <Form.Select>
                                <option>Price range 1</option>
                                <option>Price range 2</option>
                                <option>Price range 3</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group controlId="rating">
                              <Form.Select>
                                <option>1 Star</option>
                                <option>2 Star</option>
                                <option>3 Star</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group controlId="monthavil">
                              <Form.Select>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group controlId="dayAvail">
                              <Form.Select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group controlId="yearavil">
                              <Form.Select>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col><Button variant="success" type="submit">
                          Search
                        </Button></Col>
                        </Row>
                        
                      </Form>
                      
                    </Card.Body>
{/* sort ---------------------------------- */}
                {/* </Card>
                 <Card bg='secondary' text='light'>
                    <Card.Body>
                      <Form>
                        <Row className='d-flex align-items-center'>
                          <Col><h3>Sort</h3></Col>
                          <Col style={{textAlign: 'right'}}><a>City</a></Col>
                          <Col xs={2}>
                            <Form.Group controlId="destinationSort">
                              <Form.Select>
                                <option>City Name Descending</option>
                                <option>City Name Ascending</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col style={{textAlign: 'right'}}><a>Price</a></Col>
                          <Col xs={2}>
                            <Form.Group controlId="priceSort">
                              <Form.Select>
                                <option>Price Ascending</option>
                                <option>Price Descending</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col style={{textAlign: 'right'}}><a>Rating</a></Col>
                          <Col xs={2}>
                            <Form.Group controlId="ratingSort">
                              <Form.Select>
                                <option>Rating Ascending</option>
                                <option>Rating Descending</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                         
                          <Col><Button variant="success" type="submit">
                          Sort
                        </Button></Col>
                        </Row>
                      </Form>  
                    </Card.Body> 
                </Card> */}
           
</Container>
            {/* <Container className='d-flex p-2 justify-content-center'>
                <Card style={{ width: '80rem', height: '11rem'}} bg='dark' text='light'>
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
                            <Form.Group className="mb-3" controlId="rating">
                              <Form.Select>
                                <option>1 Star</option>
                                <option>2 Star</option>
                                <option>3 Star</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col><h2>Date Available</h2></Col>
                          <Col>
                          <Form.Group className="mb-3" controlId="monthavil">
                              <Form.Select>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group className="mb-3" controlId="dayAvail">
                              <Form.Select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group className="mb-3" controlId="yearavil">
                              <Form.Select>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
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
            </Container> */}

            
        </section>
    )
}

export default mainPageSearch;