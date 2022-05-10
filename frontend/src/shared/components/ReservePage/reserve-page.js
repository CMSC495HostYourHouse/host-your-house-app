import React from 'react';
import { useLocation } from 'react-router-dom';
import ServiceList from './ServiceList';
import './reserve-page.css';
import ActivityList from './ActivityList';
import PhotoSlider from './PhotoSlider';
import CheckInCheckOutForm from "./CheckInOutForm";
import { Link } from 'react-router-dom';
import { Icon } from '@mui/material';
import {
    Pool, CellWifi, LocalParking, FreeBreakfast, Pets, AirportShuttle, Sanitizer, Masks,
    SocialDistance, Wash, LocationOn, Flight, KeyboardBackspace
} from '@mui/icons-material';

export const ReservePage = () => {
    const location = useLocation()

    const resHouse = location.state.items;

    return (
        <section className='overlay-light'>
            <section className='reservation-form'>

                {/* Link to go back */}
                <Link to="/" className='back-link'>
                    <Icon component={KeyboardBackspace} />
                    <span>Back to Listings</span>
                </Link>

                {/* Submit list of photos for the rental here */}
                <PhotoSlider photos={photoUrls_test} />

                {/* Pop-up form to get check in check out dates*/}
                <div id='reserve-button' ><CheckInCheckOutForm resHouse={resHouse} /></div>


                {/* Button for reserving the viewed rental */}
                {/* <Button id='reserve-button'>Reserve Now</Button> */}

                {/* Name, address, and rating section */}
                <section>
                    <h1 id='rental-name'>{resHouse.name}</h1>
                    <p>{resHouse.city}, {resHouse.state} {resHouse.zipCode}</p>
                    <p id='rental-rating'>Rating: {resHouse.rating}</p>
                </section>

                {/* Left column of form: Amenities and Cleaning/Safety */}
                <div className='left-column'>
                    <h1>Popular Amenities</h1>
                    <ServiceList services={amenities_test} />

                    <h1>Cleaning and Safety Practices</h1>
                    <ServiceList services={services_test} />
                </div>

                {/* Right column of form: Nearby activities */}
                <div className='right-column'>
                    <h1>Explore the Area</h1>
                    <ActivityList activities={activities_test} />
                </div>
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
}];

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

// Photos from unsplash.com
const photoUrls_test = [
    "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1616593969747-4797dc75033e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
]