// import React from "react";
import "./Card.css";
import "./BoardCard.css";
import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";

const Card = ({ card, fetchCards, baseUrl }) => {
    const { title, message, gifUrl, author, card_id } = card;
    const [upvotes, setUpvotes] = useState(card.upvotes);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

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
            console.log("deleting card", cardId);
            await axios.delete(baseUrl + `cards/${cardId}`);
            fetchCards();
        } catch (error){
        console.error("Error deleting card:", error);
        }
    };

    const fetchComments = async () => {
        try {
            const response = await axios.get(`${baseUrl}comments/card/${card_id}`);
            setComments(response.data);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };
        
    const handleAddComment = async () => {
        try {
            await axios.post(`${baseUrl}comments`, {
            message: newComment,
            author: "User", // Replace with actual user data
            cardId: card_id,
            });
            setNewComment("");
            fetchComments();
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    return (
        <div className=" card">
        {/* <div className="card-content"> */}
            <h3 className="card-title">{title}</h3>
            <p>{message}</p>
            <img src={gifUrl} alt="GIF" />
            <p>{author}</p>
            <div className="board-card-buttons">
            <button className="upvote-button" onClick={handleUpvote}>Upvote: {upvotes}</button>
            <button className="delete-button" onClick={() => deleteCard(card.card_id)}>Delete</button>
            </div>
            <div className="comments-section">
            <h4>Comments</h4>
            <ul>
                {comments.map((comment) => (
                <li key={comment.comment_id}>
                    <p>{comment.message}</p>
                    <small>by {comment.author}</small>
                </li>
                ))}
            </ul>
            <div className="add-comment">
                <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
                />
                <button onClick={handleAddComment}>Add Comment</button>
            </div>
            </div>
        </div>
        // </div>
    );
};

export default Card;

Card.propTypes = {
    card: PropTypes.object.isRequired,
    fetchCards: PropTypes.func.isRequired,
    baseUrl: PropTypes.string.isRequired
}; 