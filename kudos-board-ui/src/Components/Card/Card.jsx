import React, { useState, useEffect } from "react";
import "./Card.css";
import axios from "axios";

const Card = ({ card }) => {
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

  return (
    <div className="card">
      <p>{message}</p>
      <img src={gifUrl} alt="GIF" />
      <p>{author}</p>
      <button className='upvote-button' onClick={handleUpvote}>Upvote: {upvotes}</button>
      <button className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default Card;