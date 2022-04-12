import React from 'react';
import ServiceList from './ServiceList';
import './reserve-page.css';
import ActivityList from './ActivityList';
import PhotoSlider from './PhotoSlider';

import {Pool, CellWifi, LocalParking, FreeBreakfast, Pets, AirportShuttle, Sanitizer, Masks, 
    SocialDistance, Wash, LocationOn, Flight} from '@mui/icons-material';

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
    icon: Pool
    }, {
    description: "Free WiFi",
    icon: CellWifi
    }, {
    description: "Parking included",
    icon: LocalParking
    }, {
    description: "Pet Friendly",
    icon: Pets
    }, {        
    description: "Breakfast included",
    icon: FreeBreakfast
    }, {        
    description: "Free Airport Shuttle",
    icon: AirportShuttle
  }]

const services_test = [{
    description: "Cleaned with disinfectant",
    icon: Sanitizer
    }, {
    description: "Personal protective equipment",
    icon: Masks
    }, {
    description: "Hand sanitizer provided",
    icon: Wash
    }, {
    description: "Social distancing",
    icon: SocialDistance
}]

const activities_test = [{
    description: "William P. Didusch Utolgical Museum",
    distance: '7 min drive',
    icon: LocationOn
    }, {
    description: "Baltimore, MD (BWI-Baltimore Washington Intl. Thurgood Marshall",
    distance: '11 min drive',
    icon: Flight
    }, {
    description: "Baltimore Cruise Terminal",
    distance: '12 min drive',
    icon: LocationOn
    }, {
    description: "Fort McHenry",
    distance: '13 min drive',
    icon: LocationOn
}]

const photoUrls_test = [
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png" 
]