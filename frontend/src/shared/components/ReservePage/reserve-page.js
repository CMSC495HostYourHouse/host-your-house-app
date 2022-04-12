import React from 'react';
import ServiceList from './ServiceList';
import './reserve-page.css';
import ActivityList from './ActivityList';
import PhotoSlider from './PhotoSlider';


export const ReservePage = () => {
    return (
        <section className='background'>
            <section className='overlay-light'>
                <section className='reservation-form'>
                    
                    <h1>Back to Listings</h1>

                    <PhotoSlider photos={photoUrls_test}/>

                    <section>
                        <h3>Name</h3>
                        <p>Address</p>
                        <label>Rating</label>
                    </section>
                    <div className='left-column'>
                        <h1>Popular Amenities</h1>
                        <ServiceList services={amenities_test}/>

                        <h1>Cleaning and Safety Practices</h1>
                        <ServiceList services={services_test}/>
                    </div>

                    <div className='right-column'>
                        <h1>Explore the Area</h1>
                        <ActivityList activities={activities_test}/>
                    </div>
                </section>
            </section>
        </section>
    )
}


/* TEST DATA */
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


const activities_test = [{
    description: "William P. Didusch Utolgical Museum",
    distance: '7 min drive',
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
    }, {
    description: "Baltimore, MD (BWI-Baltimore Washington Intl. Thurgood Marshall",
    distance: '11 min drive',
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
    }, {
    description: "Baltimore Cruise Terminal",
    distance: '12 min drive',
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
    }, {
    description: "Fort McHenry",
    distance: '13 min drive',
    imageLink: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"  
}]

const photoUrls_test = [
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png" 
]