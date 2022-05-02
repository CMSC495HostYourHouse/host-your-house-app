import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavBar from "../NavBar/navBar";

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
            window.alert(error); //make a pop-up of the issue appear
            return; //end the code block
        });
    }

    return (
        <div className='register-body'>
            <NavBar />
            <section className="register-form">
                <h1 className="large text-primary">Sign Up</h1>
                <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
                <form className="form" onSubmit={onSubmit}>

                    <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={(e) => updateForm({email: e.target.value})}
                            required/>
                    </div>

                    <div className="form-group" style={{ marginTop: '2rem' }}>
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

                    <div className='form-group'>
                        <input type="submit" className="btn btn-primary" value="Register" />
                    </div>
                </form>

                <p className="my-1">Already have an account? 
                    <Link to="/login"><b> Sign In</b></Link>
                </p>
            </section>
        </div>
      )
}
