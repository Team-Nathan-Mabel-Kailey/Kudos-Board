import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import axios from "axios";

import './App.css'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx' 
import NavBar from '../NavBar/NavBar.jsx'
import Card from '../Card/Card.jsx'
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
        
        
      {/* <Card 
        // key={cardNum.id}
        // cardNum={cardNum}
        // viewBoard={() => viewBoard(cardNum.id)}
        // deteleBoard={() => deleteBoard(cardNum.id)}
      /> */}


      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/card-details/:id" element={<CardDetail />} />
      </Routes>
    

    <Footer />

    </Router>

  )
}

export default App
