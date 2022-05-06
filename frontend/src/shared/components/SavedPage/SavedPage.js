import React, {useEffect, useState} from 'react';
import './SavedPage.css';
import SavedProp from './SavedProp/saved-prop';

// saved page, brings in the navbar and the component

export const SavedPage = () => {
		const [user, setUser] = useState("");
		const [saved, setSaved] = useState([]);
	
	

		function getUser(){
			setUser("tt13@gmail.com" )
		}

		async function fetchData(){
			await fetch("http://localhost:5000/users/email/" + "tt13@gmail.com", {
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

     return (
        <section>

            <div className='homepagebackground'></div>
						
						{saved.map((item)=>{
       				return (
       					<SavedProp property = {item}/>
     				);})}
									
								
        
        </section>
    )
}

export default SavedPage;