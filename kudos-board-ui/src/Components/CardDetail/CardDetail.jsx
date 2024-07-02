import './CardDetail.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from '../Modal/Modal';


const CardDetail = () => {
    const { cardId } = useParams();
    const [selectedCard, setSelectedCard] = useState(null);
    const [cards, setCards] = useState([]);
    const [showForm, setShowForm] = useState(false);


    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/board/${cardId}`);
            setCards(response.data.cards);
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    };

    const handleCreateSuccess = (newCard) => {
        if (newCard && newCard.card_id) {
            setCards([...cards, newCard]);
            setShowForm(false);
        } else {
            console.error("Invalid card data received:", newCard);
        }
    };

    return (
        <>
            <div className="board-detail">
                <div className="board-detail-content">
                    <h3>Card {cardId} Detail</h3>

                    <button onClick={() => setSelectedCard(cardId)} >Create a Card</button>
                    {/*
                    <img src={"https://picsum.photos/300/400"} alt={"title"}/>
                    <h2 className="card-detail-title">Card Title</h2>
                    <h3 className="card-detail-category">Card Category</h3>
                    <p className="card-detail-description">Card Description</p>*/}
                </div> 
            </div>

            {selectedCard && (
                <Modal 
                    show={selectedCard !== null}
                    onClose={() => setSelectedCard(null)}
                    cardId={cardId}
                    onSuccess={handleCreateSuccess}
                />
            )}
        </>
        
    )
}

export default CardDetail
