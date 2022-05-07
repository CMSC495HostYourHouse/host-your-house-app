import React, {useEffect, useState} from 'react';
import './SavedPage.css';
import SavedProp from './SavedProp/saved-prop';
import {grabUser} from "../../../utils/authToken";
// saved page, brings in the navbar and the component

export const SavedPage = () => {
		const [user] = useState(grabUser());
		const [saved, setSaved] = useState([]);
	
	

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
		console.log(user)
		if(user !== 'undefined'){
			console.log(user)
			fetchData();
		}
  	}, [""]);

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