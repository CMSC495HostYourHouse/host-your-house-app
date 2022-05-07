import React from "react";
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './shared/components/RegisterPage/Register';
import { Login } from './shared/components/LoginPage/Login';
import { MainPage } from './shared/components/main-page/main-page';
import { AccountPage } from './shared/components/AccountPage/accountPage';
import { ReservedProperties } from './shared/components/ReservedProperties/ReservedProperties';
import { SavedPage } from './shared/components/SavedPage/SavedPage';
import { ReservePage } from "./shared/components/ReservePage/reserve-page";
import TopMenu from "./shared/components/NavBar/navBar";
import { AppBackground } from "./shared/components/AppBackground/AppBackground";
import { useState } from "react";

const App = () => {

  const [user, setUser] = useState({email: '', name: '', address: '', city: '', state: '', zipcode: ''})
  console.log(user)

  return (
    <Router>
      <React.Fragment>
        <AppBackground/> {/* Persistent Background */}
        <TopMenu user={user}/>  {/* Persistent NavBar */}
            <Routes>
                <Route exact path="/" element={ <MainPage/> }/>
                <Route path="/register" element={ <Register/> }/>
                <Route path="/login" element={ <Login setUser={setUser}/> }/>
                <Route path="/account" element={ <AccountPage setUser={setUser} user={user}/> }/>
                <Route path="/reserved" element={ <ReservedProperties/> }/>
                <Route path="/saved" element={ <SavedPage/> }/>
                <Route path="/reservation" element={ <ReservePage/> }/>
            </Routes>
      </React.Fragment>
      </Router>
  );
}

export default App;