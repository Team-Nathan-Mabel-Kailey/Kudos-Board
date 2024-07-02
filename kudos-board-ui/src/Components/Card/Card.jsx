import React from "react";
import "./Card.css";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const Card = ({ card, fetchCards, baseUrl}) => {
const { message, gifUrl, author, card_id } = card;
const [upvotes, setUpvotes] = useState(card.upvotes);

const handleUpvote = async () => {
    try {
        await axios.put(`http://localhost:3000/cards/${card_id}/upvote`, { upvotes: upvotes + 1 });
        setUpvotes(upvotes + 1);
    } catch (error) {
        console.error("Error upvoting card:", error);
    }
};

    const deleteCard = async (cardId) => {
        try{
            console.log("deleting board", cardId);
            await axios.delete(baseUrl + `cards/${cardId}`);
            fetchCards();
        } catch (error){
        console.error("Error deleting board:", error);
        }
    };

    return (
        <div className="card">
        <p>{message}</p>
        <img src={gifUrl} alt="GIF" />
        <p>{author}</p>
        <button className='upvote-button' onClick={handleUpvote}>Upvote: {upvotes}</button>
        <button className="delete-button" onClick={() => deleteCard(card.card_id)}>
            Delete
        </button>
        </div>
    );
};

export default Card;

Card.propTypes = {
    card: PropTypes.object.isRequired,
    fetchCards: PropTypes.func.isRequired,
    baseUrl: PropTypes.string.isRequired
}; 