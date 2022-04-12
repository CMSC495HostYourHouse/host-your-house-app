import React from 'react';
import ServiceList from './ServiceList';
import './reserve-page.css';


export const ReservePage = () => {
    return (
        <section className='background'>
            <section className='reservation-form'>
                <h1>Back to Listings</h1>
                <section>
                    <h3>Name</h3>
                    <p>Address</p>
                    <label>Rating</label>
                </section>

                <h1>Amenities</h1>
                <ServiceList services={amenities_test}/>

                <h1>Cleaning and Safety Practices</h1>
                <ServiceList services={services_test}/>
            </section>
        </section>
    )
}


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


const services_test = [{
    description: "Cleaned with disinfectant",
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
    }, {
    description: "Personal protective equipment",
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
    }, {
    description: "Hand sanitizer provided",
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
    }, {
    description: "Social distancing",
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"  
}]
