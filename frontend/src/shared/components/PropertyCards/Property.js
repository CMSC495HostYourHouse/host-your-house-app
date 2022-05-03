import React from 'react';
import './property.css';
import Button from 'react-bootstrap/Button';
import StarRateIcon from '@mui/icons-material/StarRate';

// need to take in what property card to make for properties from the database.

class Property extends React.Component{
state = {
        items: [],
        house: this.props.featHouse
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