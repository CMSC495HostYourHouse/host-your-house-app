import React from 'react';
import './featured-property.css';
import Button from 'react-bootstrap/Button';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Link } from 'react-router-dom';

// need to take in what property card to make for properties from the database.

class FeaturedProperty extends React.Component{
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
                <Link to="/reservation">
                    <div className='featured-body' href="/reservation">
                        <img src={items.image}/>
                        <h2 className='header2'>{items.name}</h2>
                        <span className="featured-address">{items.city}, {items.state} {items.zipCode}</span><br/>
                        
                        <div className='featured-price'>${items.price}</div>
                        <div className='featured-rating-container'>
                            <span >{items.rating}</span>
                            <StarRateIcon/>
                        </div>
                    </div>
                </Link>
        </section>
      )
    }
}

export default FeaturedProperty;