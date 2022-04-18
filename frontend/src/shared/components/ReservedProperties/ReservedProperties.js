import React from 'react';
import './ReservedProperties.css';
import NavBar from "../NavBar/navBar";
import ReservedPageComp from './ReservedPageComp';

export const ReservedProperties = () => {
     return (
        <section>
            <div className='homepagebackground'></div>
            <NavBar />
            <ReservedPageComp />
        
        </section>
    )
}

export default ReservedProperties;