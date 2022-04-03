import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className='register-body'>
            <section className="register-form">
                <h1 className="large text-primary">Log In</h1>
                <form className="form" action="">


                    <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            name="email" 
                            required/>
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
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
