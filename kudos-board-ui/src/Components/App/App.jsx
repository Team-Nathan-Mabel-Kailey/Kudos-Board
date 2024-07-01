// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import axios from "axios";

import './App.css'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx' 
import Home from "../Home/Home.jsx";
import CardDetail from '../CardDetail/CardDetail.jsx'

function App() {

  return (
    
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card-details/:cardId" element={<CardDetail />} />
      </Routes>
    

    <Footer />

    </Router>

  )
}

export default App
