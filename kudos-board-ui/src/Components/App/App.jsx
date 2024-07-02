import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import './App.css'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx' 
import Home from "../Home/Home.jsx";
import NavBar from '../NavBar/NavBar.jsx'
import CardDetail from '../CardDetail/CardDetail.jsx'

function App() {

  const [boards, setBoards] = useState([]);
  const [newBoard, setNewBoard] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [error, setError] = useState(null);

  const baseUrl = "http://localhost:3000/";

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    setIsFetching(true);
    try {
      const response = await axios.get(baseUrl + "boards");   // Gets all boards
      setBoards(response.data);
      
    } catch (err) {
      setError(err);
    } finally {
      setIsFetching(false);
    }
  };


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
          <Route
            path="/"
            element={
              <Home
                error={error}
                boards={boards}
                isFetching={isFetching}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            }
        />

            <Route
              path="/card-details/:cardId"
              element={
                <CardDetail
                  error={error}
              />
            }
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
