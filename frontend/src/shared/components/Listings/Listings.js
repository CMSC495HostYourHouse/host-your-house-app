import React from 'react';
import './Listings.css';
import Card from 'react-bootstrap/Card'
import PropertyCards from '../PropertyCards/propertyCards';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from  'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

class Listings extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			searchType: 3,
			searchParam1: "a",
			searchParam2: 0,
			
		};
		this.handleChange0 = this.handleChange0.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleChange3 = this.handleChange3.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this)
		
  }
	handleChange0(evt) {
		this.setState({searchType: 1});
		this.setState({searchParam1: evt.target.value});
		console.log("new value city");
		console.log(this.state.searchParam1)
		
	}

	handleChange2(evt) {
		this.setState({searchType: 0});
		this.setState({searchParam2: evt.target.value});
		console.log("new value price", evt.target.value);
		console.log(2)
		console.log(this.state.searchParam2)
	}

	handleChange3(evt) {
		this.setState({searchType: 2});
		this.setState({searchParam2: evt.target.value});
		console.log("new value rating", evt.target.value);
		console.log(this.state.searchParam2)
	}

	handleSubmit(evt){
		this.updatelist()
		evt.preventDefault();
		
		console.log("submitted");
	}

	updatelist(){
		fetch("http://localhost:5000/api/houses/search/"  + this.state.searchType + '/' + this.state.searchParam1 + '/' + this.state.searchParam2)
				.then(async(res) => await res.json())
				.then((json) => {
					this.setState({
						items: []
					})
					this.setState({
						items: json,
						DataisLoaded: true
							
					}); 
					console.log(json)
				})
	}
    componentDidMount() {
		this.updatelist();
    }
    
		
    render(){
		
		
        
     return (
        <section>
            <Container className='d-flex p-2 justify-content-center flex-row'>
                {/* Listings card diplays on main page, shows all the properties */}
                <Card className='listings-card' bg='dark' text='light'>
                    <Card.Header><h1>All Properties</h1>
                        {/* bring in the search/sort bars */}
                        {/* this will need to be modified to get what the user selected and modify the order or what listings show in the card  */}
                        {/* <MainPageSearch /> */}
                    </Card.Header>
                    <Card.Body>
						{/* This needs to be modified to be dynamic. it needs to initially display all properties, but then needs to be able to show the properties sorted
								or only show matching properties to search. This will require the dynamic creation of the collomuns based on how many properties shown */}
						<Row>
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
										<Form onSubmit={this.handleSubmit}>
													{/* second row is the form groups */}
											<Row className='d-flex align-items-center'>
												<Col>
													{/* destination form group */}
													<Form.Group>
													{/* controlId="destination" onChange={handleChange} value={this.state.destination} */}
														<Form.Select name="city" onChange={this.handleChange0}>
															<option></option>
															<option value={'Sebastool'}>Sebastool</option>
															<option value={'Hamlin'}>Hamlin</option>
															<option value={'Joshua Tree'}>Joshua Tree</option>
															<option value={'Terlingue'}>Terlingua</option>
														</Form.Select>
													</Form.Group>
												</Col>
												<Col>
														{/* Price form group*/}
													<Form.Group name="price" onChange={this.handleChange2}>
														<Form.Select>
														<option></option>
															<option value={100}>0$ - 100$ </option>
															<option value={200}>100$ - 200$</option>
															<option value={300}>200$ - 300$</option>
															<option value={400}>300$ - 400$</option>
															<option value={500}>400$ - 500$</option>
														</Form.Select>
													</Form.Group>
												</Col>
												<Col>
														{/* rating form group */}
													<Form.Group name="rating" onChange={this.handleChange3}>
													<Form.Select>
														<option></option>
														<option value={1}>0 to 1 Star</option>
														<option value={2}>1 to 2 Star</option>
														<option value={3}>2 to 3 Star</option>
														<option value={4}>3 to 4 Star</option>
														<option value={5}>4 to 5 Star</option>
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
												<Col><Button variant="success" type="submit" value={"Submit"}>Search</Button></Col>
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
												<Col><Button variant="success" type="submit">Sort</Button></Col>
											</Row>
										</Form>  
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Row>
						{/*  */}
						<Row>
								{this.state.items.map(item =>(
									<Col>
									
										<PropertyCards featHouse = {item._id}/>
									</Col>  
								))}
						</Row>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}
}
export default Listings;