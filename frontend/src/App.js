import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Register } from './components/Register';
import { Login } from './components/Login';
import MainContent from './shared/components/MainContent/main-content';
import MenuNav from "./shared/components/MenuNav/menu-nav";
import AppFooter from "./shared/components/AppFooter/app-footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Landing/> }/>
        <Route path="/register" element={ <Register/> }/>
        <Route path="/login" element={ <Login/> }/>
      </Routes>
    </Router>

    // <div id={'main-container'} style={{height: "100vh"}}>
    //   <MenuNav/>
    //   <MainContent/>
    //   <AppFooter/>
    // </div>

  );
}

export default App;
