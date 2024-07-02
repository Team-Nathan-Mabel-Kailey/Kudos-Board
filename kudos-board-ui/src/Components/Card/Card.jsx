import "./Card.css";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const Card = ({ card, fetchBoards, baseUrl }) => {
    // Add 'card' to props validation
    const { message, gifUrl, author } = card;
    const [upvotes, setUpvotes] = useState(card.upvotes);

    const handleUpvote = async () => {
        try {
        await axios.put(`http://localhost3000/boards/${card.board_id}/cards/${card.card_id}/upvote`, { upvotes: upvotes + 1 });
        setUpvotes(upvotes + 1);
        } catch (error) {
        console.error("Error upvoting card:", error);
        }
    };

    const deleteCard = async (cardId) => {
        try{
            console.log("deleting board", cardId);
            await axios.delete(baseUrl + `boards/${cardId}`);
            fetchBoards();
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
    fetchBoards: PropTypes.func.isRequired,
    baseUrl: PropTypes.string.isRequired
};