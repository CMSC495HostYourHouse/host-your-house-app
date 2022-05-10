import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import './reserve-page.css';
import { grabUser } from "../../../utils/authToken";
import { useNavigate } from 'react-router-dom';
import { checkToken } from "../../../utils/authToken";


export const CheckInCheckOutForm = ({ resHouse }) => {
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);
  const [houseToCheck, setHouseToCheck] = useState();
  const [inMonth, setInMonth] = useState(1);
  const [inDay, setInDay] = useState(1);
  const [inYear, setInYear] = useState(2022);
  const [outMonth, setOutMonth] = useState(1);
  const [outDay, setOutDay] = useState(1);
  const [outYear, setOutYear] = useState(2022);
  // const [startDay, setStartDay] = useState();
  // const [endDay, setEndDay] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      setUser(grabUser())
      checkAvailability()

    }
    getUser()
  }, [])

  async function checkAvailability() {
    fetch("http://localhost:5000/api/houses/" + resHouse._id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      setHouseToCheck(await res.json())

    })
  }

  function checkDate(startDay, endDay) {
    var dateConflict = false
    var startDateInput = startDay;
    var endDateInput = endDay;
    var startNewRes = startDateInput.split("/");
    var endNewRes = endDateInput.split("/");
    var newResStart = new Date(startNewRes[2], parseInt(startNewRes[0]) - 1, startNewRes[1]);
    var newResEnd = new Date(endNewRes[2], parseInt(endNewRes[0]) - 1, endNewRes[1]);

    var prevResStartDate = "";
    var dbResStart = '';
    var dbStart = 0;
    if (newResStart >= newResEnd) {
      return 0
    }

    for (var i = 0; i < houseToCheck.reservations.length; i++) {
      if ((i % 2 == 0)) {
        // even items

        prevResStartDate = houseToCheck.reservations[i];
        dbResStart = prevResStartDate.split("/");
        dbStart = new Date(dbResStart[2], parseInt(dbResStart[0]) - 1, dbResStart[1]);

        console.log(newResStart + ' i am in even')
      } else {
        // odd items

        var prevResEndDate = houseToCheck.reservations[i];
        var dbResEnd = prevResEndDate.split("/");
        var dbEnd = new Date(dbResEnd[2], parseInt(dbResEnd[0]) - 1, dbResEnd[1]);

        // run the check on odd items since we now have start and end date ready to compare
        if ((newResStart >= dbStart && newResStart <= dbEnd) || (newResEnd >= dbStart && newResEnd <= dbEnd) || (dbStart >= newResStart && dbStart <= newResEnd) || (dbEnd >= newResStart && dbEnd <= newResEnd)) {
          dateConflict = true

        }
      }
    }
    if (dateConflict == true) {

      return 1
    } else {

      return 2

    }
  }

  async function handleSaveReservation(saveReservation) {
    //code for actually hitting the endpoint
    await fetch("http://localhost:5000/reservation/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user, reserved: saveReservation })
    }).then(async response => {
      const res = await response.json();
      if (response.status == '200') {
        navigate("/reserved")
        // console.log(JSON.stringify({ email: user, reserved: saveReservation }))
      } else {
        throw res.error
      }
    }).catch(error => { //if there is an error
      window.alert(error); //make a pop-up of the issue appear
      return; //end the code block
    });
    let startDayIntoDb = inMonth + '/' + inDay + '/' + inYear
    let endDayIntoDb = outMonth + '/' + outDay + '/' + outYear
    // push dates to properties in db
    fetch("http://localhost:5000/saveReservation/" + resHouse._id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reservation1: startDayIntoDb, reservation2: endDayIntoDb })
    }).then(async response => {
      const res = await response.json();
      if (response.status == '200') {
        //alert('Property saved to your account!')
      } else {
        throw res.error
      }
    }).catch(error => { //if there is an error
      window.alert(error); //make a pop-up of the issue appear
      return; //end the code block
    });
  }

  const handleReservation = () => {
    if (!checkToken()) {
      alert('Must be logged in to reserve!')
      return
    }
    let reservationData = [resHouse._id, `${inMonth}/${inDay}/${inYear}`, `${outMonth}/${outDay}/${outYear}`];
    var checkResult = checkDate(reservationData[1], reservationData[2]);
    if (checkResult == 0) {
      alert('Invalid dates entered! Start day cannot be after end day.')
    }
    if (checkResult == 1) {
      alert('Reservation conflicts with existing reservation for the property!')
    }
    if (checkResult == 2) {
      handleSaveReservation(reservationData)
    }
  };

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
                <Col style={{ textAlign: 'center' }}><a>Check In</a></Col>
                <Col style={{ textAlign: 'center' }}><a>Month</a></Col>
                <Col>
                  <Form.Group controlId="checkinMonth">
                    <Form.Select onChange={(e) => setInMonth(e.target.value)}>
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
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col style={{ textAlign: 'center' }}><a>Day</a></Col>
                <Col>
                  <Form.Group controlId="checkinday">
                    <Form.Select onChange={(e) => setInDay(e.target.value)}>
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
                <Col style={{ textAlign: 'center' }}><a>Year</a></Col>
                <Col>
                  <Form.Group controlId="checkinYear">
                    <Form.Select onChange={(e) => setInYear(e.target.value)}>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col style={{ textAlign: 'center' }}><a>Check Out</a></Col>
                <Col style={{ textAlign: 'center' }}><a>Month</a></Col>
                <Col>
                  <Form.Group controlId="checkoutMonth">
                    <Form.Select onChange={(e) => setOutMonth(e.target.value)}>
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
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col style={{ textAlign: 'center' }}><a>Day</a></Col>
                <Col>
                  <Form.Group controlId="checkoutday">
                    <Form.Select onChange={(e) => setOutDay(e.target.value)}>
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
                <Col style={{ textAlign: 'center' }}><a>Year</a></Col>
                <Col>
                  <Form.Group controlId="checkoutYear">
                    <Form.Select onChange={(e) => setOutYear(e.target.value)}>
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
            <Button variant="primary" onClick={handleReservation}>
              Confirm Reservation
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  )
}

export default CheckInCheckOutForm;