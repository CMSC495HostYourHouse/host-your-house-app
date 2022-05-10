import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './register-page.css'

export const Register = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
        password2: ""
    });

    const navigate = useNavigate();

    //responsible for updating properties
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value};
        });
    }

    function comparePasswords(password, password2) {

    }

    //responsible for submitting the user
    async function onSubmit(e) {
        e.preventDefault();
        
        if(form.password !== form.password2){
            
            alert('Passwords do not match!')
            
        } else if(form.password === ""){
            alert('Password field can not be empty!')
        }else {
            //creating a new user using the form data
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const newUser = {...form};
        
            if(re.test(newUser.email)){
                //code for actually hitting the endpoint
                await fetch("http://localhost:5000/users/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser)
                }).then(async response => {
                    const res = await response.json();
                    if (response.status == '200') {
                        setForm({email: "", password: ""}) //reset the form
                        navigate("/login")
                    } else {
                        throw res.error
                    }
                }).catch (error => { //if there is an error
                    alert('User with same email already exists!')
                    //window.alert(error); //make a pop-up of the issue appear
                    return; //end the code block
                });
            } else {
                return alert('Email is not valid!')
            }
        }  
    }

    return (
        <section className="register-form">
            <h1 className="medium text-primary">Register</h1>
            <form className="form" onSubmit={onSubmit}>

                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Email" 
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={(e) => updateForm({email: e.target.value})}
                        required/>
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={form.password}
                        onChange={(e) => updateForm({password: e.target.value})}
                        minLength="8"/>
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={form.password2}
                        onChange={(e) => updateForm({password2: e.target.value})}
                        minLength="8"/>
                </div>

                <div className='right-justified'>
                    <Link to="/login" id='sign-in-link'><b>Sign In</b></Link>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>
        </section>
      )
}