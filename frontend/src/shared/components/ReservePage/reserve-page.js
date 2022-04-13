import React from 'react';
import ServiceList from './ServiceList';
import './reserve-page.css';
import ActivityList from './ActivityList';
import PhotoSlider from './PhotoSlider';
import { Link } from 'react-router-dom';

import { Button, FormText } from 'react-bootstrap';

import { Icon } from '@mui/material';
import { Pool, CellWifi, LocalParking, FreeBreakfast, Pets, AirportShuttle, Sanitizer, Masks, 
    SocialDistance, Wash, LocationOn, Flight, KeyboardBackspace} from '@mui/icons-material';


export const ReservePage = () => {
    return (
        <section className='background'>
            <section className='overlay-light'>
                <section className='reservation-form'>
                    
                    {/* Link to go back */}
                    <Link to="/" className='back-link'>
                        <Icon component={KeyboardBackspace}/>
                        <span>Back to Listings</span>
                    </Link>

                    {/* Submit list of photos for the rental here */}
                    <PhotoSlider photos={photoUrls_test}/>
                    
                    {/* Button for reserving the viewed rental */}
                    <Button id='reserve-button'>Reserve</Button>

                    {/* Name, address, and rating section */}
                    <section>
                        <h1 id='rental-name'>Name</h1>
                        <text>Address</text>
                        <p id='rental-rating'>Rating</p>
                    </section>

                    {/* Left column of form: Amenities and Cleaning/Safety */}
                    <div className='left-column'>
                        <h1>Popular Amenities</h1>
                        <ServiceList services={amenities_test}/>

                        <h1>Cleaning and Safety Practices</h1>
                        <ServiceList services={services_test}/>
                    </div>

                    {/* Right column of form: Nearby activities */}
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