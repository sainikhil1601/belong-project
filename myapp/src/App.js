import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/main";
import Signup from "./components/signup";
import Login from "./components/login";
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import Nav from './Nav';
import Header from './header';
import Hero from './Hero';
import Home from "./Home";
import Courses from "./Courses";
import LanguageCourse from "./LanguageCourse";
import Tutorials from "./Tutorials";

function App() {
	const user = localStorage.getItem("token");

	return (
    <>
   
    <Router>
    
    
    
      <Routes>
      
			{user && <Route path="/" element={<Home />} />}
			<Route path="/signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/Courses" element={<Courses/>}></Route>
      <Route path="/LanguageCourse" element={<LanguageCourse/>}></Route>
      <Route path="/Tutorials" element={<Tutorials/>}></Route>
		</Routes>

    </Router>
	

    </>

	);
}

export default App;








