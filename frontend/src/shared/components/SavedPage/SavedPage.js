import React from 'react';
import './SavedPage.css';
import NavBar from "../NavBar/navBar";
import SavedPageComp from './SavedPageComp';

// saved page, brings in the navbar and the component

export const SavedPage = () => {
     return (
        <section>
            <div className='homepagebackground'></div>
            <SavedPageComp />
        
        </section>
    )
}

export default SavedPage;