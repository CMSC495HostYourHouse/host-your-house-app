import React, {useEffect, useState} from 'react';
import './ReservedProperties.css';
import ReservedCards from './ReservedProp/ReservedProp';
import {grabUser} from "../../../utils/authToken";
// reserved properties page, brings in the navbar and the component

export const ReservedProperties = () => {
	const [user, setUser] = useState("");
	const [reserved, setReserved] = useState([]);

	function getUser(){
		//console.log(grabUser())
		setUser(grabUser())
	}

	async function fetchData(){
		await fetch("http://localhost:5000/users/reserved/" + user, {
		method: "GET",
		headers: {
				"Content-Type": "application/json",
		},
		}).then(async(res) => {
				setReserved(await res.json())
		})
	}

useEffect(() => {
	getUser();
	if(user !== ""){
		fetchData();
	}
  }, [user]);

if(reserved.length > 0){
  return (
    <section>
        <div className='homepagebackground'></div>	
					{reserved.map((item)=>{
						return (
						<ReservedCards userReserved = {item}/>
					);})}
    </section>
	)} else{
		return(
			<section className="empty-form">
            	<h1 className="header-light">No reserved properties to display!</h1>
			</section>
		)
	}
}

export default ReservedProperties;