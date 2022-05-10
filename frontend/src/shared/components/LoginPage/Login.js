import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setToken } from "../../../utils/authToken";
import jwt_decode from "jwt-decode";
import '../RegisterPage/register-page.css'

export const Login = ({ setUser }) => {

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    //responsible for updating properties
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    //responsible for submitting the user
    async function onSubmit(e) {
        e.preventDefault();

        //creating a new user using the form data
        const newUser = { ...form };

        //code for actually hitting the endpoint
        await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        }).then(async response => {
            let res = await response.json();
            if (response.status == '200') {
                setUser(prevState => { return { ...prevState, email: res.user.email } })
                setToken(await jwt_decode(res.token), res.user);
                setForm({ email: "", password: "" }) //reset the form
                navigate("/")
            } else {
                throw res.error
            }
        }).catch(error => { //if there is an error
            window.alert(error); //make a pop-up of the issue appear
            return; //end the code block
        });
    }

    return (
        <section className="register-form">
            <h1 className="medium text-primary">Log In</h1>

            <p id='register-link-group'>
                Don't Have an Account?
                <Link to="/register" id="register-link"><b>Create One Here</b></Link>
            </p>

            <form className="form" onSubmit={onSubmit}>

                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={form.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                        required />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={form.password}
                        onChange={(e) => updateForm({ password: e.target.value })}
                        minLength="8" />
                </div>

                <div className="right-justified">
                    <input type="submit" className="btn btn-primary" value="Log In" />
                </div>
            </form>
        </section>
    )
}