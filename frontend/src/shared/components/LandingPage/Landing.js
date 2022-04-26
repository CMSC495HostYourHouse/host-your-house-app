import React from 'react'
import { Link } from 'react-router-dom'
export const Landing = () => {
    return (
        <section className='landing'>
            <div className="landing-inner">
                <h1 className="x-large">Host Your House</h1>
                <div className="buttons">
                    <Link to="/register" className="btn btn-primary">Sign Up</Link>
                    <Link to="/login" className="btn btn-light">Login</Link>
                </div>
            </div>
        </section>
    )
}