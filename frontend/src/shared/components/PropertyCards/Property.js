import React from 'react';
import './property.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Link } from 'react-router-dom';
import { checkToken, grabUser } from "../../../utils/authToken";

// need to take in what property card to make for properties from the database.

class Property extends React.Component {
	state = {
		items: [],
		house: this.props.featHouse,
		startDate: this.props.startDate,
		endDate: this.props.endDate
	}
	constructor(props) {
		super(props);
		fetch("http://localhost:5000/api/houses/" + this.state.house, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}).then(async (res) => {
			let house = await res.json()
			this.setState({
				items: house,
				DataisLoaded: true
			});
		})
	}

	checkDate() {
		if (!this.state.startDate.includes('a') && !this.state.endDate.includes('a')) {
			var dateConflict = false;
			var startDateInput = this.state.startDate;
			var endDateInput = this.state.endDate;
			var startNewRes = startDateInput.split("-");
			var endNewRes = endDateInput.split("-");
			var newResStart = new Date(startNewRes[2], parseInt(startNewRes[0]) - 1, startNewRes[1]);
			var newResEnd = new Date(endNewRes[2], parseInt(endNewRes[0]) - 1, endNewRes[1]);

			var prevResStartDate = "";
			var dbResStart = '';
			var dbStart = 0;
			if (newResStart >= newResEnd) {
				return 'Invalid dates entered!'
			}
			var i;
			for (i = 0; i < this.state.items.reservations.length; i++) {
				if ((i+2)%2==1) {
					// even items
					
					prevResStartDate = this.state.items.reservations[i];
					dbResStart = prevResStartDate.split("/");
					dbStart = new Date(dbResStart[2], parseInt(dbResStart[0]) - 1, dbResStart[1]);
				} else {
					
					// odd items
					var prevResEndDate = this.state.items.reservations[i];
					var dbResEnd = prevResEndDate.split("/");
					var dbEnd = new Date(dbResEnd[2], parseInt(dbResEnd[0]) - 1, dbResEnd[1]);

					
					// run the check on odd items since we now have start and end date ready to compare
					if ((newResStart >= dbStart && newResStart <= dbEnd) || (newResEnd >= dbStart && newResEnd <= dbEnd) || (dbStart >= newResStart && dbStart <= newResEnd) || (dbEnd >= newResStart && dbEnd <= newResEnd)) {
						dateConflict = true
					}
				}	
			}

			if(dateConflict == true){
				return 'Property is not available on dates entered!'
			}else{
				return 'Property is available on dates entered!'
			}
		}
	}

	savePropertyToUser(evt) {
		let save = evt.target.value
		if (checkToken()) {
			let currentUser = grabUser();
			
			fetch("http://localhost:5000/users/save/" + currentUser + '/' + save, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			}).then(async response => {
				const res = await response.json();
				if (response.status == '200') {
					alert('Property saved to your account!')
				} else {
					throw res.error
				}
			}).catch(error => { //if there is an error
				window.alert(error); //make a pop-up of the issue appear
				return; //end the code block
			});
		} else {
			alert('Not Logged In!')
		}
	}

	render() {
		const { items, DataisLoaded } = this.state;
		if (!DataisLoaded) return <div><h1>Loading</h1></div>;
		return (
			<section>
				<div className='property-body'>
					<img src={items.image} alt='Property' />
					<div id="property-grid">
						<div id='property-left-col'>
							<h2 className='header2'>{items.name}</h2>
							<span className="property-address">{items.city}, {items.state} {items.zipCode}</span><br />
							<p>{items.description}</p>
							<p style={{ color: "teal" }}>{this.checkDate()}</p>
						</div>
						<div id='property-right-col'>
							<div className='property-price'>${items.price}</div>
							<div className='property-rating-container'>
								<span >{items.rating}</span>
								<StarRateIcon />
							</div>
							<ButtonGroup aria-label="save/reserve" id="property-reserve-btn">
								<Button variant="secondary" value={items._id} onClick={this.savePropertyToUser}>Save</Button>
								<Button href="/reservation" variant="primary">Reserve</Button>
							</ButtonGroup>
						</div>
						<Link to="/reservation" state={{ items }}>
							<Button id="property-reserve-btn" variant="primary">Reserve</Button>
						</Link>
					</div>
				</div>
			</section >
		)
	}
}

export default Property;