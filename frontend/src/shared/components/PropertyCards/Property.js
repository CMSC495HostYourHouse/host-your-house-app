import React from 'react';
import './property.css';
import Button from 'react-bootstrap/Button';
import StarRateIcon from '@mui/icons-material/StarRate';
import SaveButton from '../SaveButton/SaveButton';

// need to take in what property card to make for properties from the database.

class Property extends React.Component{
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
		}).then(async(res) => {
			let house = await res.json()
			this.setState({
				items: house,
				DataisLoaded: true
			});
		})
	}

	checkDate(){
		if(!this.state.startDate.includes('a') && !this.state.endDate.includes('a')){
			var startDateInput = this.state.startDate;
			var endDateInput = this.state.endDate;
			var startNewRes = startDateInput.split("-");
			var endNewRes = endDateInput.split("-");
			var newResStart = new Date(startNewRes[2], parseInt(startNewRes[0])-1, startNewRes[1]);
			var newResEnd = new Date(endNewRes[2], parseInt(endNewRes[0])-1, endNewRes[1]);
			
			let i = 0;
			for (i = 0; i < this.state.items.reservations.length; i++) {
				var prevResStartDate = this.state.items.reservations[i];
				var prevResEndDate = this.state.items.reservations[i+1];
				// increment array since we are checking this item and the next item, reservations are in pairs.
				i++
				
				var dbResStart = prevResStartDate.split("/");
				var dbResEnd = prevResEndDate.split("/");
				var dbStart = new Date(dbResStart[2], parseInt(dbResStart[0])-1, dbResStart[1]);  // -1 because months are from 0 to 11
				var dbEnd = new Date(dbResEnd[2], parseInt(dbResEnd[0])-1, dbResEnd[1]);
				if(newResStart >= newResEnd){
					return 'Invalid dates entered!'
				}
				// check1 and check2 are the dates we searched with, to and from are the dates already reserved in database
				if((newResStart >= dbStart && newResStart <= dbEnd) || (newResEnd >= dbStart && newResEnd <= dbEnd) || (dbStart >= newResStart && dbStart <= newResEnd) || (dbEnd >= newResStart && dbEnd <= newResEnd)){
					return "Property is not available on dates entered."
				} else{
					return "Property is available on dates entered!"
				}
			}
		}	
	}

	render(){
		const { items, DataisLoaded } = this.state;
		if (!DataisLoaded) return <div><h1>Loading</h1></div>;
			return (
				<section>
					<div className='property-body'>
						<img src={items.image}/>
						<div id="property-grid">
							<div id='property-left-col'>
								<h2 className='header2'>{items.name}</h2>
								<span className="property-address">{items.city}, {items.state} {items.zipCode}</span><br/>
								<p>{items.description}</p>
								<p style={{ color: "teal" }}>{this.checkDate()}</p>
							</div>
							<div id='property-right-col'>
								<div className='property-price'>${items.price}</div>
								<div className='property-rating-container'>
									<span >{items.rating}</span>
									<StarRateIcon/>
								</div>
								<Button id="property-reserve-btn" variant="primary">Reserve</Button>
								<Button id="property-reserve-btn" href="/reservation" variant="primary">Reserve</Button>
							</div>
						</div>
					</div>
				</section>
      )
	}
}

export default Property;