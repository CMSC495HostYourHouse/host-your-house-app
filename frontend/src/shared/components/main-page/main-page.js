import React from 'react';
import './main-page.css';
import MenuNav from "../MenuNav/menu-nav";
import AppFooter from "../AppFooter/app-footer";

export const MainPage = () => {
    return (
        <div>
            <MenuNav/>
            <div id={'main-content'}></div>
            <AppFooter/>
        </div>
    )
}