import React from 'react';
import './mainPageSearch.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from  'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

// need to export user input from here to sort search properties in the listings component

class mainPageSearch extends React.Component{
  render(){
    
     return (
        <section>
            <Container className='container'>
              <Accordion>
                {/* accordian for search, hides until clicked */}
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Search</Accordion.Header>
                  <Accordion.Body className='accordStyle1'>
                    {/* first row is the labels for the form groups */}
                    <Row>
                      <Col style={{textAlign: 'center'}}><a>City</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Price</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Stars</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Month</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Day</a></Col>
                      <Col style={{textAlign: 'center'}}><a>Year</a></Col>
                      <Col></Col>
                    </Row>
                      <Form>
                        {/* second row is the form groups */}
                        <Row className='d-flex align-items-center'>
                          <Col>
                            {/* destination form group */}
                            <Form.Group controlId="destination">
                              <Form.Select>
                                <option>City 1</option>
                                <option>City 2</option>
                                <option>City 3</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                             {/* Price form group*/}
                            <Form.Group controlId="price">
                              <Form.Select>
                                <option>0$ - 50$</option>
                                <option>50$ - 100$</option>
                                <option>100$ - 200$</option>
                                <option>200$ - 300$</option>
                                <option>300$ - 400$</option>
                                <option>400$ and up</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            {/* rating form group */}
                            <Form.Group controlId="rating">
                              <Form.Select>
                                <option>1 Star</option>
                                <option>2 Star</option>
                                <option>3 Star</option>
                                <option>4 Star</option>
                                <option>5 Star</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                    
                          <Form.Group controlId="monthavil">
                              <Form.Select>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group controlId="dayAvail">
                              <Form.Select>
                                <option>01</option>
                                <option>02</option><option>03</option><option>04</option><option>05</option><option>06</option>
                                <option>07</option><option>08</option><option>09</option><option>10</option><option>11</option>
                                <option>12</option><option>13</option><option>14</option><option>15</option><option>16</option>
                                <option>17</option><option>18</option><option>19</option><option>20</option><option>21</option>
                                <option>22</option><option>23</option><option>24</option><option>25</option><option>26</option>
                                <option>27</option><option>28</option><option>29</option><option>30</option><option>31</option>
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

                {/* Accordion for the sort bar, hides until clicked */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Sort</Accordion.Header>
                  <Accordion.Body className='accordStyle1'>
                      <Form>
                        <Row className='d-flex align-items-center'>
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
            </Container> 
        </section>
    )
}
}
export default mainPageSearch;