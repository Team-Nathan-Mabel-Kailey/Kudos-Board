// import { useState } from 'react'
import './App.css'
import './Components/Footer/Footer.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Header.jsx' 
import Card from './Components/Card/Card.jsx'
import axios from "axios";

function App() {

  return (
    <>
      <Header />
        
      <Card 
        // key={cardNum.id}
        // cardNum={cardNum}
        // viewBoard={() => viewBoard(cardNum.id)}
        // deteleBoard={() => deleteBoard(cardNum.id)}
      />

      <Footer />
    </>
    
  )
}

export default App
