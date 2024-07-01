// import { useState } from 'react'
import './App.css'
import './Components/Footer/Footer.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Header.jsx' 

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
