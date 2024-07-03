import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './boardList.css'
import "../Card/Card.css";
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx' 
import Card from "../Card/Card.jsx"
import Modal from "../Modal/Modal.jsx"


// what is it: list of cards inside each board
const BoardList = () => {
  const { boardId } = useParams();
  const [cards, setCards] = useState([]);
  const [boardName, setBoardName] = useState("");
  const [addingNewCard, setAddingNewCard] = useState(false);

  const baseUrl = "http://localhost:3000/";

  useEffect(() => {
    fetchCards();
    fetchBoardTitle();
  }, [boardId]);

  const fetchCards = async () => {
    try {
      const response = await axios.get(baseUrl + `boards/${boardId}/cards`);
      setCards(response.data);
    } catch (error) {
      console.error("Error getting cards:", error);
    }
  };

  const fetchBoardTitle = async () => {
    try {
      const response = await axios.get(baseUrl + `boards/${boardId}`);
      setBoardName(response.data.title);
    } catch (error) {
      console.error("Error fetching board data:", error);
    }
  };

  const showModal = () => {
    setAddingNewCard(!addingNewCard);
  };

  const createCard = () => {
    fetchCards();
    setAddingNewCard(false);
  };

  return (
    <div>
      <Link to="/">
        <span className="return"></span>
      </Link>
      <Header />
      <h2>{boardName}</h2>
      <div className="center-create-button">
        <button className="create-card-btn" onClick={showModal}>
          Create a Card
        </button>
        {addingNewCard && (
          <Modal
            boardId={boardId}
            show={addingNewCard}
            onCreation={createCard}
            onClose={showModal}
          />
        )}
      </div>

      <div className="card-list">
        {cards.map((card) => (
          <div key={card.card_id} className="board-card">
            <Card
              card={card}
              fetchCards={fetchCards}
              baseUrl={baseUrl}
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default BoardList;