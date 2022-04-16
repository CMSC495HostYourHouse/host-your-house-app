import React from 'react';
import './main-page.css';

import NavBar from "../NavBar/navBar";
import Featured from '../Featured/Featured';

import AllPropMainPage from '../AllPropMainPage/allPropMainPage';


export const MainPage = () => {
     return (
        <section className='homepagebackground'>
            <div className='fill-window'>
                <NavBar />
                <Featured />
                <AllPropMainPage />
            </div>
        </section>
    )
}