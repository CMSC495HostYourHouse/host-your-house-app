import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './shared/components/LandingPage/Landing';
import { Register } from './shared/components/RegisterPage/Register';
import { Login } from './shared/components/LoginPage/Login';
import { MainPage } from './shared/components/main-page/main-page';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={ <Landing/> }/>
              <Route path="/register" element={ <Register/> }/>
              <Route path="/login" element={ <Login/> }/>
              <Route path="/dashboard" element={ <MainPage/> }/>
          </Routes>
      </Router>
  );
}

export default App;
