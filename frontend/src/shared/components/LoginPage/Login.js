import React, {useState} from 'react'
import NavBar from "../NavBar/navBar";
import {Link, useNavigate} from 'react-router-dom'
import {setToken} from "../../../utils/authToken";
import jwt_decode from "jwt-decode";

export const Login = () => {

const [form, setForm] = useState({
    email: "",
    password: "",
});

const navigate = useNavigate();

    //responsible for updating properties
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value};
        });
    }

    //responsible for submitting the user
    async function onSubmit(e) {
        e.preventDefault();

        //creating a new user using the form data
        const newUser = {...form};

        //code for actually hitting the endpoint
        await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        }).then(async response => {
            let res = await response.json();
            if (response.status == '200'){
                setToken(await jwt_decode(res.token), res.user);
                setForm({email: "", password: ""}) //reset the form
                navigate("/")
            } else {
                throw res.error
            }
        }).catch (error => { //if there is an error
            window.alert(error); //make a pop-up of the issue appear
            return; //end the code block
        });
    }

    return (
        
        <div className='register-body'>
        <NavBar />
            <section className="register-form">
                <h1 className="large text-primary">Log In</h1>
                <form className="form" onSubmit={onSubmit}>


                    <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            name="email"
                            value={form.email}
                            onChange={(e) => updateForm({email: e.target.value})}
                            required/>
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={form.password}
                            onChange={(e) => updateForm({password: e.target.value})}
                            minLength="8"/>
                    </div>

                    <div className="right-justified">
                        <button className='btn btn-white'><Link to="/register"><b>Sign Up</b></Link></button>
                        <input type="submit" className="btn btn-primary" value="Log In" />
                    </div>
                </form>
            </section>
        </div>
      )
}
