import React from 'react';
import './property.css';
import Button from 'react-bootstrap/Button';
import StarRateIcon from '@mui/icons-material/StarRate';

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
            console.log(house)
            this.setState({
                items: house,
                DataisLoaded: true
            });
        })
    }

		checkDate(){
			if(!this.state.startDate.includes('a') && !this.state.endDate.includes('a')){
				var startDateSearch = this.state.startDate;
				var endDateSearch = this.state.endDate;
				var start = startDateSearch.split("-");
				var end = endDateSearch.split("-");
				var check1 = new Date(start[2], parseInt(start[0])-1, start[1]);
				var check2 = new Date(end[2], parseInt(end[0])-1, end[1]);
				
				let i = 0;
				for (i = 0; i < this.state.items.reservations.length; i++) {
					var prevResStartDate = this.state.items.reservations[i];
					var prevResEndDate = this.state.items.reservations[i+1];
					// increment array since we are checking this item and the next item, reservations are in pairs.
					i++
					
					var resStart = prevResStartDate.split("/");
					var resEnd = prevResEndDate.split("/");
					var from = new Date(resStart[2], parseInt(resStart[0])-1, resStart[1]);  // -1 because months are from 0 to 11
					var to   = new Date(resEnd[2], parseInt(resEnd[0])-1, resEnd[1]);
					if(check1 >= check2){
						return 'Invalid dates entered!'
					}
					// check1 and check2 are the dates we searched with, to and from are the dates already reserved in database
					if((check1 >= from && check1 <= to) || (check2 >= from && check2 <= to) || (from >= check1 && from <= check2) || (to >= check1 && to <= check2)){
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
				// this.checkDate()
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
                            <Button id="property-reserve-btn" href="/reservation" variant="primary">Reserve</Button>
                        </div>
                    </div>
                </div>
        </section>
      )
    }
}

export default Property;