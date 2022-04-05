import React from 'react';
import './main-page.css';

import TopMenu from "../Topmenu/topmenu";
import AllProp from '../AllProperties/AllProperties';
import Featured from '../Featured/Featured';


export const MainPage = () => {
     return (
        <section className='homepagebackground'>
            <div className="homepagebanner">
                <h1 className="x-large">Host Your House</h1>
            </div>
            <TopMenu></TopMenu>
            <h1 className="labels">Featured Homes</h1>
            <Featured></Featured>
            <h1 className="labels">All Properties</h1>
            <AllProp></AllProp>
        </section>
    )
}