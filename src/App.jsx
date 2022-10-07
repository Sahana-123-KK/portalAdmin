import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/home"
import Login from "./pages/login/login"
import {BrowserRouter as Router , Link, Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react';
import Dashboard from './pages/dashboard/dashboard';
import Employee from './pages/employee/employee';


function App() {
  
  const[display,setDisplay] = useState(localStorage.getItem("log") ? localStorage.getItem("log") : false )

  localStorage.getItem("log", display)
  
  // useEffect(()=>{
    
  //   localStorage.setItem("log",display)
  //   setDisplay(localStorage.getItem("log"))
  // })

  return (
    <div>
      <Router>

      <Routes>
        <Route path='/login' element = {<Login log={display} setlog={setDisplay} />} />
        <Route path='/' element = {<Home  log={display} setlog={setDisplay} />}/>
        <Route path='/dashboard' element={ <Dashboard  log={display} setlog={setDisplay} /> } />
        <Route path='/employee' element={ <Employee  log={display} setlog={setDisplay} /> } />

        
        

      {/* // <Login/> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
