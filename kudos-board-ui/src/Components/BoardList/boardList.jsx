import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './boardList.css'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx' 
import Card from "../Card/Card.jsx"
import Modal from "../Modal/Modal.jsx"
import "../Card/Card.css";

// what is it: list of cards inside each board
const BoardList = () => {
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
      const response = await axios.get(`http://localhost:3000/boards/${boardId}`);
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



  const handleOnCreate = (newCard) => {
    if (newCard && newCard.card_id) {
      setCards([...cards, newCard]);
      setAddNew(false);
    } else {
      console.error("Invalid info:", newCard);
    }
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
            onCreation={handleOnCreate}
            onClose={() => setAddNew(null)}
          />
        )}
      </div>

      <div className="card-list">
        {cards.map((card) => (
            <div key={card.card_id} className="card">
                <Card
                  card={card}
                  fetchCards={fetchCards}
                  baseUrl={"http://localhost:3000"}
                />
            </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BoardList;
