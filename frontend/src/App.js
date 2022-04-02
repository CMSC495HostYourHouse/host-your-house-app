import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Register } from './components/Register';
import { Login } from './components/Login';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Landing/> }/>
        <Route path="/register" element={ <Register/> }/>
        <Route path="/login" element={ <Login/> }/>
      </Routes>
    </Router>
  );
}

export default App;
