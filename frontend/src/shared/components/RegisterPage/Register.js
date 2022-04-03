import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
    return (
        <div className='register-body'>
            <section className="register-form">
                <h1 className="large text-primary">Sign Up</h1>
                <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
                <form className="form" action="">

                    {/* Username field. Currently not implemented */ }
                    {/* <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            name="name" 
                            required />
                    </div> */}

                    <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            name="email" 
                            required/>
                    </div>

                    <div className="form-group" style={{ marginTop: '2rem' }}>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
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
