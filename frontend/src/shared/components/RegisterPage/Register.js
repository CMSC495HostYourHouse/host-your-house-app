import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

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

    //responsible for submitting the user
    async function onSubmit(e) {
        e.preventDefault();

        window.alert("got here");

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
        <div className='register-body'>
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
