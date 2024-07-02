import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './boardList.css'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx' 
import Card from "../Card/Card.jsx"
import Modal from "../Modal/Modal.jsx"

// what is it: list of cards inside each board
const boardList = () => {
  const { boardId } = useParams();
  const [cards, setCards] = useState([]);
  const [boardName, setBoardName] = useState("");
  const [addNew, setAddNew] = useState(false);

  // const baseUrl = "http://localhost:3000/";

  useEffect(() => {
    fetchCards();
    fetchBoardTitle();
  }, [boardId]);

  const fetchCards = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/boards/${boardId}/cards`);
      console.log(response.data);
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const fetchBoardTitle = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/boards/${boardId}`);
      const title = response.data.title;
      setBoardName(title);
    } catch (error) {
      console.error("Error fetching board data:", error);
    }
  };

  const showModal = () => {
    setAddNew(!addNew);
  };

  const handleOnCreate = () => {
    fetchCards();
    setAddNew(false);
  };

  return (
    <div>
      <Link to="/">
        <span className="back"></span>
      </Link>
      <Header />
      <h2>{boardName}</h2>
      <div className="center-create-button">
        <button className="create-card-btn" onClick={showModal}>
          Create a Card
        </button>
        {addNew && (
          <Modal
            boardId={boardId}
            show={addNew}
            onCreation={handleOnCreate}
            onClose={showModal}
          />
        )}
      </div>

      <div className="card-list">
        {cards.map((card) => (
          <div className="card" key={card.card_id}>
            <Card card={card} />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default boardList;
