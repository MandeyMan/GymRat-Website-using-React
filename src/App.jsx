import React, { useState } from "react";
import "./index.css";
import Navbar from "./component/Navbar";

import { BrowserRouter as Router , Route, Link, Routes } from "react-router-dom";

import Home from "./component/Home";

import Pricing from '../src/navlink/Pricing'
import AboutUS from '../src/navlink/AboutUs';

import FitnessPage from "./navlink/FitnessPage";
import { Footer } from "./component/Footer";

function App() {
  return (
   
      <Router>
         <div className="App">
        <Navbar />
        <Routes>
        <Route   path="/"  element={<Home/>} />
   
        <Route path="/Pricing"  element={<Pricing/>} />
        <Route path="/AboutUS"  element={<AboutUS/>} />
        {/* <Route path="/FitnessCalculators"  element={<FitnessCalculators/>} /> */}
        <Route path="/FitnessPage"  element={<FitnessPage/>} />
          
        </Routes>
        <Footer/>
       </div></Router>

   
  );
 
}

export default App;
