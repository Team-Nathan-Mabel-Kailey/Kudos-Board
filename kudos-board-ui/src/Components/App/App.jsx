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

        <div className="card">
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        

      <Footer />
    </>
    
  )
}

export default App
