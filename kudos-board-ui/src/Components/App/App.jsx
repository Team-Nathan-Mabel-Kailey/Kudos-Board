// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../Home/Home"
import BoardList from "../BoardList/BoardList"

// what is it: paths to either home page OR page to specific board + list of its cards
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards/:boardId" element={<BoardList />} />
      </Routes>
    </Router>
  );
};

export default App;