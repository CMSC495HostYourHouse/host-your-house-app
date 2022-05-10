import React, { useEffect, useState } from 'react';
import ServiceList from './ServiceList';
import './reserved-prop.css';
import ActivityList from './ActivityList';
import PhotoSlider from './PhotoSlider';
import {
	Pool, CellWifi, LocalParking, FreeBreakfast, Pets, AirportShuttle, Sanitizer, Masks,
	SocialDistance, Wash, LocationOn, Flight, KeyboardBackspace
} from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';

export const ReservePage = (props) => {
	const [house] = useState({
		id: props.userReserved[0]
	});
	const [startReservation] = useState({
		startDay: props.userReserved[1]
	});
	const [endReservation] = useState({
		endDay: props.userReserved[2]
	});
	const [houseData, setHouseData] = useState({
		name: ""
	});

	async function getProperty() {
		await fetch("http://localhost:5000/api/houses/" + house.id, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}).then(async (res) => {
			setHouseData(await res.json())
		})
	}

	useEffect(() => {
		if (typeof house.id !== 'undefined')
			getProperty()
	}, [houseData]);

	// console.log(house.id + '  /  ' + startReservation.startDay + '   /   ' + endReservation.endDay)
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
								<p id='rental-rating'>Rating: {houseData.rating}</p>
							</section>
							{/* Submit list of photos for the rental here */}
							{/* <PhotoSlider photos={photoUrls_test}/> */}
							<Image src={houseData.image} style={{ objectFit: 'cover', width: "100%", height: "20rem" }} />
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
							<div>
								<h5>Reservation</h5>
								<p className='m-0'>Start Date: {startReservation.startDay}</p>
								<p className='m-0'>End Date: {endReservation.endDay}</p>
							</div>
						</section>
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

export default ReservePage;