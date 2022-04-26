import React from 'react';
import './main-page.css';
import NavBar from "../NavBar/navBar";
import Featured from '../Featured/Featured';
import Listings from '../Listings/Listings';


export const MainPage = () => {
     return (
        // main page that shows at path /, brings in navbar, featured and listing components
        <div className='main-page'>
            <div className='homepagebackground'></div>
            <div className='fill-window'>
                <NavBar />
                <Featured />
                <Listings />
            </div>
        </div>
    )
}