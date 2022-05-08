import React, {useEffect, useState} from 'react';
import ServiceList from './ServiceList';
import './saved-prop.css';
import ActivityList from './ActivityList';
import PhotoSlider from './PhotoSlider';
import { Pool, CellWifi, LocalParking, FreeBreakfast, Pets, AirportShuttle, Sanitizer, Masks, 
    SocialDistance, Wash, LocationOn, Flight} from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import CheckInCheckOutForm from './CheckInOutForm';
import Image from 'react-bootstrap/image';

export const ReservePage = (props) => {
const [house] = useState({
	id: props.property
});
const [houseData, setHouseData] = useState({
	name: "",   
});

async function getProperty(){
	await fetch("http://localhost:5000/api/houses/" + house.id, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}).then(async(res) => {
		setHouseData(await res.json())
	})
}
	
	useEffect(() => {
		getProperty()
	},[houseData]);
		
	//console.log(houseData)
	return (
		<Container className='d-flex p-2 justify-content-center flex-row'>
			<Card className='saved-card' bg='light' text='dark'>
				<Card.Body>
					<section className='overlay-light'>
						<section>
							{/* Name, address, and rating section */}
							<section>
								<h2 id='rental-name'>{houseData.name}</h2>
								<text>{houseData.city}, {houseData.state} {houseData.zip}</text>
								<p id='rental-rating'>Rating</p>
							</section>

								{/* Submit list of photos for the rental here */}
								{/* <PhotoSlider photos={photoUrls_test}/> */}
							<Image src={houseData.image} style={ {objectFit: 'cover', width: "100%", height: "20rem"} }/>
								
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
						{/* Check in check out days */}
						<CheckInCheckOutForm />
					</section>
				</Card.Body>
			</Card>
		</Container>
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

export default ReservePage;