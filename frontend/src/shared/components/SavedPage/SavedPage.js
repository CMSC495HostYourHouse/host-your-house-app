import React, {useEffect, useState} from 'react';
import './SavedPage.css';
import SavedProp from './SavedProp/saved-prop';
import {grabUser} from "../../../utils/authToken";
// saved page, brings in the navbar and the component

export const SavedPage = () => {
		const [user, setUser] = useState("");
		const [saved, setSaved] = useState([]);
	
		function getUser(){
			//console.log(grabUser())
			setUser(grabUser())
		}

		async function fetchData(){
			await fetch("http://localhost:5000/users/saved/" + user, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(async(res) => {
			setSaved(await res.json())
        })
		}

	useEffect(() => {
		getUser();
		if(user != ""){
			fetchData();
		}
  	}, [user]);

	if(saved.length > 0){
     return (
        <section>
            <div className='homepagebackground'></div>	
				{saved.map((item)=>{
					return (
					<SavedProp property = {item}/>
				);})}
        </section>
    )} else{
		return(
			<section>No saved properties to display!</section>
		)
	}
}

export default SavedPage;