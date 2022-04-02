import MainContent from './shared/components/MainContent/main-content';
import MenuNav from "./shared/components/MenuNav/menu-nav";
import AppFooter from "./shared/components/AppFooter/app-footer";
import React from "react";

const App = () => {
  return (
    <div id={'main-container'} style={{height: "100vh"}}>
      <MenuNav/>
      <MainContent/>
      <AppFooter/>
    </div>

  );
}

export default App;
