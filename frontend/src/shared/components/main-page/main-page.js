import React from 'react';
import './main-page.css';

import NavBar from "../NavBar/navBar";
import AllProp from '../AllProperties/AllProperties';
import Featured from '../Featured/Featured';
import MainPageSearch from '../MainPageSearch/mainpageSearch';

export const MainPage = () => {
     return (
        <section className='homepagebackground'>

            
            <NavBar />
            <MainPageSearch />
            
            <Featured />
        </section>
    )
}