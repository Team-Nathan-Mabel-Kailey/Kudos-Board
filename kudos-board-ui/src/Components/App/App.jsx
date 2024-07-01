// import { useState, useEffect } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import axios from 'axios'
import './App.css'
import Header from '../Header/Header.jsx' 
// import NavBar from '../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx'

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
