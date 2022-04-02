import React from 'react';
import MenuNav from './MenuNav/menu-nav';
import AppFooter from "./AppFooter/app-footer";

const MainPage = () => {
    return (
        <div style={{height: "100vh"}}>
            <MenuNav/>
            <AppFooter/>
        </div>

    )
}

export default MainPage