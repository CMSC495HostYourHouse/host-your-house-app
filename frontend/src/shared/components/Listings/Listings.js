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
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class Listings extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			searchCity: 'default',
			searchPrice: 0,
			searchRating: 0,
			sortOrSearch: 0,
			sortType: 0,
			month: '-1',
			day:'-1',
			year:'-1',
		};

		this.handleCityChange= this.handleCityChange.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.handleRatingChange = this.handleRatingChange.bind(this);
		this.handleMonthChange = this.handleMonthChange.bind(this);
		this.handleDayChange = this.handleDayChange.bind(this);
		this.handleYearChange = this.handleYearChange.bind(this);
		this.handleSort = this.handleSort.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this)
  }
	// handle changes in search selection
	handleCityChange(evt) {
		this.setState({searchCity: evt.target.value});	
	}
	handlePriceChange(evt) {
		this.setState({searchPrice: evt.target.value});
	}
	handleRatingChange(evt) {
		this.setState({searchRating: evt.target.value});
	}
	// date handles
	handleMonthChange(evt) {
		this.setState({month: evt.target.value});
	}
	handleDayChange(evt) {
		this.setState({day: evt.target.value});
	}
	handleYearChange(evt) {
		this.setState({year: evt.target.value});	
	}

	handleSort(evt){
		this.setState({sortType: evt.target.value});
	}
	
	// handle submit/reset buttons, calls method to update what is shown
	handleSubmit(evt){
		this.updatelist();
		evt.preventDefault();
	}

	// sets state to default values when reset in card header is clicked
	handleReset(item1, item2, item3) {
		this.setState({searchCity: item1});
		this.setState({searchPrice: item2});
		this.setState({searchRating: item3});
		this.setState({sortOrSearch: 0});
	}

	// switch between search and sort
	switchSortSearch(option){
		this.setState({sortOrSearch: option});
	}

	// method that refreshes what is shown
	updatelist(){
		fetch("http://localhost:5000/api/houses/searchSort/" + this.state.sortOrSearch + '/' + this.state.searchCity + '/' + this.state.searchPrice  + '/' + this.state.searchRating + '/' + this.state.sortType + '/' + this.state.month + '/' + this.state.day + '/' + this.state.year)
				.then(async(res) => await res.json())
				.then((json) => {
					this.setState({
						items: [],
					});
					this.setState({
						items: json,
						DataisLoaded: true
					});
					console.log(json)
				})
		}

	// initially call fetch to sever to get all data
	componentDidMount() {
	this.updatelist();
	}
    
	render(){  
		return (
			<section>
				<Container className='d-flex p-2 justify-content-center flex-row'>
					{/* Listings card diplays on main page, shows all the properties */}
					<Card className='listings-card' bg='dark' text='dark' >
						<Card.Header className='d-flex justify-content-between align-items-center'>
							<h1 style={{ color: "white" }}>All Properties</h1>
								<Form onSubmit={this.handleSubmit}>
									<Button variant="success" type="submit" onClick={()=>
										this.handleReset('default', 0, 0)}>Reset</Button>
								</Form>
							</Card.Header>
						<Card.Body>
							<Row>
								<Accordion>
								{/* accordian for search, hides until clicked */}
									<Accordion.Item eventKey="0" onClick={()=>
										this.switchSortSearch(0)}>
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
															<Form.Select name="city" onChange={this.handleCityChange}>
																<option value={'default'}></option>
																<option value={'Sebastool'}>Sebastool</option>
																<option value={'Hamlin'}>Hamlin</option>
																<option value={'Joshua Tree'}>Joshua Tree</option>
																<option value={'Sandbridge'}>Sandbridge</option>
																<option value={'Chicago'}>Chicago</option>
																<option value={'Key West'}>Key West</option>
																<option value={'North Rim'}>North Rim</option>
																<option value={'Mountain City'}>Mountain City</option>
																<option value={'Terlingua'}>Terlingua</option>
															</Form.Select>
														</Form.Group>
													</Col>
													<Col>
														{/* Price form group*/}
														<Form.Group name="price" onChange={this.handlePriceChange}>
															<Form.Select>
																<option value={0}></option>
																<option value={100}>0$ - 100$ </option>
																<option value={200}>100$ - 200$</option>
																<option value={300}>200$ - 300$</option>
																<option value={400}>300$ - 400$</option>
																<option value={500}>400$ - 500$</option>
																<option value={600}>500$ - 600$</option>
																<option value={700}>600$ - 700$</option>
																<option value={800}>700$ - 800$</option>
																<option value={900}>800$ - 900$</option>
																<option value={1000}>900$ - 1000$</option>
															</Form.Select>
														</Form.Group>
													</Col>
													<Col>
															{/* rating form group */}
														<Form.Group name="rating" onChange={this.handleRatingChange}>
														<Form.Select>
															<option value={0}></option>
															<option value={1}>0 to 1 Star</option>
															<option value={2}>1 to 2 Star</option>
															<option value={3}>2 to 3 Star</option>
															<option value={4}>3 to 4 Star</option>
															<option value={5}>4 to 5 Star</option>
														</Form.Select>
														</Form.Group>
													</Col>
													<Col>
														<Form.Group name="month" onChange={this.handleMonthChange}>
															<Form.Select>
																<option value={'a'}></option>
																<option value={'01'}>January</option>
																<option value={'02'}>February</option>
																<option value={'03'}>March</option>
																<option value={'04'}>April</option>
																<option value={'05'}>May</option>
																<option value={'06'}>June</option>
																<option value={'07'}>July</option>
																<option value={'08'}>August</option>
																<option value={'09'}>September</option>
																<option value={'10'}>October</option>
																<option value={'11'}>November</option>
																<option value={'12'}>December</option>
															</Form.Select>
														</Form.Group>
													</Col>
													<Col>
														<Form.Group name="day" onChange={this.handleDayChange}>
															<Form.Select>
																<option value={'a'}></option>
																<option value={'01'}>01</option><option value={'02'}>02</option><option value={'03'}>03</option>
																<option value={'04'}>04</option><option value={'05'}>05</option><option value={'06'}>06</option>
																<option value={'07'}>07</option><option value={'08'}>08</option><option value={'09'}>09</option>
																<option value={'10'}>10</option><option value={'11'}>11</option><option value={'12'}>12</option>
																<option value={'13'}>13</option><option value={'14'}>14</option><option value={'15'}>15</option>
																<option value={'16'}>16</option><option value={'17'}>17</option><option value={'18'}>18</option>
																<option value={'19'}>19</option><option value={'20'}>20</option><option value={'21'}>21</option>
																<option value={'22'}>22</option><option value={'23'}>23</option><option value={'24'}>24</option>
																<option value={'25'}>25</option><option value={'25'}>26</option><option value={'27'}>27</option>
																<option value={'28'}>28</option><option value={'29'}>29</option><option value={'30'}>30</option>
																<option value={'31'}>31</option>
															</Form.Select>
														</Form.Group>
													</Col>
													<Col>
														<Form.Group name="year" onChange={this.handleYearChange}>
															<Form.Select>
																<option value={'a'}></option>
																<option value={'2022'}>2022</option>
																<option value={'2023'}>2023</option>
																<option value={'2024'}>2024</option>
															</Form.Select>
														</Form.Group>
													</Col>
													<Col><Button variant="success" type="submit" value={"Submit"}>Submit</Button></Col>
												</Row>
											</Form>
										</Accordion.Body>
									</Accordion.Item>

									{/* Accordion for the sort bar, hides until clicked */}
									<Accordion.Item eventKey="1" onClick={()=>
										this.switchSortSearch(1)}>
									<Accordion.Header>Sort</Accordion.Header>
										<Accordion.Body className='accordStyle1'>
											<Form onSubmit={this.handleSubmit}>
												<Row className='d-flex align-items-center'>
													<Col><a>Ascending :</a></Col>
													<Col>
														<ButtonGroup className="me-2" aria-label="First group" onClick={this.handleSort}>
															<Button variant="primary" value={1}>City</Button>
															<Button variant="primary" value={2}>Price</Button>
															<Button variant="primary" value={3}>Rating</Button>
														</ButtonGroup>
													</Col>
													<Col><a>Descending: </a></Col>
													<Col>
														<ButtonGroup className="me-2" aria-label="First group" onClick={this.handleSort}>
															<Button variant="primary" value={4}>City</Button>
															<Button variant="primary" value={5}>Price</Button>
															<Button variant="primary" value={6}>Rating</Button>
														</ButtonGroup>
													</Col>
													<Col><Button variant="success" type="submit">Sort</Button></Col>
												</Row>
											</Form>  
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</Row>
							{/* show the properties */}
							<Row>
								{this.state.items.map(item =>(
									<Col><PropertyCards featHouse = {item._id}/></Col>
									
								))}
							</Row>
						</Card.Body>
					</Card>
				</Container>
			</section>
)}}
export default Listings;
