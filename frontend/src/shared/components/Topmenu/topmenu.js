import React from 'react';
import { Link } from 'react-router-dom'
import './topmenu.css';

export const TopMenu = () => {
     return (
        <section className='topmenubackground'>
            <div className="topmenu">
                <Link to="/register" className="btn btn-primary" style={{float: "right"}}>Sign Up</Link>
                <Link to="/login" className="btn btn-primary" style={{float: "right"}}>Login</Link>
                <Link to="/login" className="btn btn-primary">My Reservations</Link>
                <Link to="/login" className="btn btn-primary">My Saved Prorperties</Link> 
            </div>
        </section>
    )
}

export default TopMenu