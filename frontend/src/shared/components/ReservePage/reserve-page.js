import React from 'react';
import AmenityList from './AmenityList';
import './reserve-page.css';


const amenities_test = [{
    description: "Pool",
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
    }, {
    description: "Free WiFi",
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
    }, {
    description: "Parking included",
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
    }, {
    description: "Pet Friendly",
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
    }, {        
    description: "Breakfast included",
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
  }]


export const ReservePage = () => {
    return (
        <section className='background'>
            <section className='reservation-form'>
                <section>
                    <h3>Name</h3>
                    <p>Address</p>
                    <label>Rating</label>
                </section>

                <h1>Amenities</h1>
                <AmenityList amenities={amenities_test}/>
            </section>
        </section>
    )
}
