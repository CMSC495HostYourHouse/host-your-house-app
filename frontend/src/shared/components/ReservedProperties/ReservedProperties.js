import React from 'react';
import './ReservedProperties.css';
import ReservedPageComp from './ReservedPageComp';

// reserved properties page, brings in the navbar and the component

export const ReservedProperties = () => {
     return (
        <section>
            <div className='homepagebackground'></div>
            <ReservedPageComp />
        
        </section>
    )
}

export default ReservedProperties;