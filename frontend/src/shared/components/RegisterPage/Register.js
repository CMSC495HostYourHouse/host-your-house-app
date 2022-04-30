import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavBar from "../NavBar/navBar";
import './register-page.css'

export const Register = () => {

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

    function comparePasswords(password1, password2) {

    }

    //responsible for submitting the user
    async function onSubmit(e) {
        e.preventDefault();

        //creating a new user using the form data
        const newUser = {...form};

        //code for actually hitting the endpoint
        await fetch("http://localhost:5000/users/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        }).catch (error => { //if there is an error
            window.alert(error); //make a pop-up of the issue appear
            return; //end the code block
        });

        setForm({email: "", password: ""}) //reset the form
        navigate("/")
    }

    return (
        <section className="register-form">
            <h1 className="medium text-primary">Register</h1>
            <form className="form" onSubmit={onSubmit}>

                <div className="form-group">
                    <input 
                        type="email" 
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
