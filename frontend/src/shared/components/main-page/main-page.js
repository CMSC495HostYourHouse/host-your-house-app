import React from 'react';
import './main-page.css';
import Featured from '../Featured/Featured';
import Listings from '../Listings/Listings';


export const MainPage = () => {
     return (
        // main page that shows at path /, brings in navbar, featured and listing components
        <div className='main-page'>
            <div className='fill-window'>
                <Featured />
                <Listings />
            </div>
        </div>
    )
}