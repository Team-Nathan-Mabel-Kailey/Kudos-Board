// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import axios from "axios";

import './App.css'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx' 
import Home from "../Home/Home.jsx";
import NavBar from '../NavBar/NavBar.jsx'

import CardDetail from '../CardDetail/CardDetail.jsx'

function App() {

  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleOnSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };
  
  return (
    
    <Router>
      <Header />

      <NavBar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchInputValue={searchInputValue}
            handleOnSearchInputChange={handleOnSearchInputChange}
      />
        

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card-details/:cardId" element={<CardDetail />} />
      </Routes>
    

    <Footer />

    </Router>

  )
}

export default App
