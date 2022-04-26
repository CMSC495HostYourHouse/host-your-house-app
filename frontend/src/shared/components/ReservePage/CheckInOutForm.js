import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import './reserve-page.css';


export const CheckInCheckOutForm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     return (
        <section>
            <Container>
                <Button id='reserve-button' variant="primary" onClick={handleShow}>
                        Reserve Now
                    </Button>

                    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"
      centered>
                        <Modal.Header closeButton>
                        <Modal.Title>Reserve Now</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Row>
                                    <Col style={{textAlign: 'center'}}><a>Check In</a></Col>
                                    <Col style={{textAlign: 'center'}}><a>Month</a></Col>
                                    <Col>
                                      <Form.Group controlId="checkinMonth">
                                        <Form.Select>
                                          <option>January</option>
                                          <option>Febuary</option>
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
                                    <Col style={{textAlign: 'center'}}><a>Day</a></Col>
                                    <Col>
                                      <Form.Group controlId="checkinday">
                                        <Form.Select>
                                          <option>01</option>
                                          <option>02</option>
                                          <option>03</option>
                                          <option>04</option>
                                          <option>05</option>
                                          <option>06</option>
                                          <option>07</option>
                                          <option>08</option>
                                          <option>09</option>
                                          <option>10</option>
                                          <option>11</option>
                                          <option>12</option>
                                          <option>13</option>
                                          <option>14</option>
                                          <option>15</option>
                                          <option>16</option>
                                          <option>17</option>
                                          <option>18</option>
                                          <option>19</option>
                                          <option>20</option>
                                          <option>21</option>
                                          <option>22</option>
                                          <option>23</option>
                                          <option>24</option>
                                          <option>25</option>
                                          <option>26</option>
                                          <option>27</option>
                                          <option>28</option>
                                          <option>29</option>
                                          <option>30</option>
                                          <option>31</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </Col>
                                    <Col style={{textAlign: 'center'}}><a>Year</a></Col>
                                    <Col>
                                      <Form.Group controlId="checkinYear">
                                        <Form.Select>
                                          <option>2022</option>
                                          <option>2023</option>
                                          <option>2024</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{textAlign: 'center'}}><a>Check Out</a></Col>
                                    <Col style={{textAlign: 'center'}}><a>Month</a></Col>
                                    <Col>
                                      <Form.Group controlId="checkoutMonth">
                                        <Form.Select>
                                          <option>January</option>
                                          <option>Febuary</option>
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
                                    <Col style={{textAlign: 'center'}}><a>Day</a></Col>
                                    <Col>
                                      <Form.Group controlId="checkoutday">
                                        <Form.Select>
                                          <option>01</option>
                                          <option>02</option>
                                          <option>03</option>
                                          <option>04</option>
                                          <option>05</option>
                                          <option>06</option>
                                          <option>07</option>
                                          <option>08</option>
                                          <option>09</option>
                                          <option>10</option>
                                          <option>11</option>
                                          <option>12</option>
                                          <option>13</option>
                                          <option>14</option>
                                          <option>15</option>
                                          <option>16</option>
                                          <option>17</option>
                                          <option>18</option>
                                          <option>19</option>
                                          <option>20</option>
                                          <option>21</option>
                                          <option>22</option>
                                          <option>23</option>
                                          <option>24</option>
                                          <option>25</option>
                                          <option>26</option>
                                          <option>27</option>
                                          <option>28</option>
                                          <option>29</option>
                                          <option>30</option>
                                          <option>31</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </Col>
                                    <Col style={{textAlign: 'center'}}><a>Year</a></Col>
                                    <Col>
                                      <Form.Group controlId="checkoutYear">
                                        <Form.Select>
                                          <option>2022</option>
                                          <option>2023</option>
                                          <option>2024</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Confirm Reservation
                        </Button>
                        </Modal.Footer>
                    </Modal>
            </Container>
        </section>
    )
}

export default CheckInCheckOutForm;


