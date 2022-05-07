import React, {useEffect, useState} from 'react';
import './accountPage.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import {grabUser} from "../../../utils/authToken";

//checking to make sure changes were made
function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

export const AccountPage = ({ user, setUser }) => {

  const navigate = useNavigate();

  const [localUserChanges, setLocalChanges] = useState(user)

  const handleSetLocalChanges = (changes) => {
    setLocalChanges(prev => ({...prev, ...changes}))
  }

	
  async function handleSave(){
    setUser(localUserChanges)
    //code for actually hitting the endpoint
    await fetch("http://localhost:5000/update/", {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(localUserChanges)
      }).then(async response => {
          const res = await response.json();
          if (response.status == '200') {
              navigate("/account")
          } else {
              throw res.error
          }
      }).catch (error => { //if there is an error
          window.alert(error); //make a pop-up of the issue appear
          return; //end the code block
      });
  }

async function getUserData(){
		await fetch("http://localhost:5000/account/" + grabUser(), {
				method: "GET",
				headers: {
						"Content-Type": "application/json",
				},
		}).then(async(res) => {
				setLocalChanges(await res.json())
		})
}

	useEffect(() => {
			getUserData()
  	},[localUserChanges]);

     return (
        <section className='background'>
          {/* Bring in the navbar that displays on top of page */}
          {/* <NavBar />Persistent NavBar added in App.js */}
          {/* Container for card */}
          <Container className='d-flex p-2 justify-content-center'>
            {/* Card that displays relavent account information */}
            <Card className={'account-card'} bg='dark' text='light'>
              <Card.Header><h1>My Account</h1></Card.Header> 
              <Card.Body bg='dark'>
                <form className="form">
                  <div className="form-group">
                      <input 
                          type="email" 
                          placeholder="Email" 
                          name="email"
                          value={localUserChanges.email}
                          onChange={(e) => handleSetLocalChanges({email: e.target.value})}
                          required/>
                  </div>

                  <div className="form-group">
                      <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={localUserChanges.name}
                          onChange={(e) => handleSetLocalChanges({name: e.target.value})}/>
                  </div>

                  <div className="form-group">
                      <input
                          type="text"
                          placeholder="Address"
                          name="address"
                          value={localUserChanges.address}
                          onChange={(e) => handleSetLocalChanges({address: e.target.value})}/>
                  </div>

                  <div className="form-group">
                      <input
                          type="text"
                          placeholder="City"
                          name="city"
                          value={localUserChanges.city}
                          onChange={(e) => handleSetLocalChanges({city: e.target.value})}/>
                  </div>

                  <div className="form-group">
                      <input
                          type="text"
                          placeholder="State"
                          name="state"
                          value={localUserChanges.state}
                          onChange={(e) => handleSetLocalChanges({state: e.target.value})}/>
                  </div>

                  <div className="form-group">
                      <input
                          type="text"
                          placeholder="Zip Code"
                          name="zipcode"
                          value={localUserChanges.zip}
                          onChange={(e) => handleSetLocalChanges({zip: e.target.value})}/>
                  </div>

                  <div className="right-justified">
                      <Button className="btn btn-primary" onClick={handleSave} disabled={shallowEqual(localUserChanges, user)}>
                      Save Changes
                      </Button>
                  </div>
              </form>
              </Card.Body>
            </Card>
          </Container>
        </section>
    )
}

