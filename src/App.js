import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'

import NavBar from "./components/navbar/navbar";
import Home from "./components/home";
import Register from "./components/register/register";
import Dtest from "./components/Diabetes Test/D_Test";
import Resualt from "./components/Diabetes Test/res";
import DietForm from './components/Diet_eating/dietEatingtest';
import Myplanner from "./components/myplanner/palnner";
import EyeTest from "./components/eyeTest/eyeTest";
import Sport from "./components/sport/sport";
import EatingBlog from "./components/eatingBlog/eatingBlog";
import Details from "./components/eatingBlog/details";
import Advice from "./components/advices/advice";
import FootTest from './components/footTest/footTest';
import Pregant from './components/heathypregant/pregant';
import Reading from "./components/reading/reading";
import { Doughnut } from 'react-chartjs-2';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Dtest />} />
        <Route path="/res" element={<Resualt />} />
        <Route path="/dietForm" element={<DietForm />} />
        <Route path="/myplanner" element={<Myplanner />} />
        <Route path="/eatingblog" element={<EatingBlog />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/eyeTest" element={<EyeTest />} />
        <Route path="/footTest" element={<FootTest />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/advice" element={<Advice />} />
        <Route path="/pregant" element={<Pregant />} />
        <Route path="/reading" element={<Reading/>} />
      </Routes>
    </React.Fragment>
  )
}



export default App;