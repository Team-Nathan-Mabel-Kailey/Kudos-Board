import "./Card.css";
import axios from "axios";

const Card = ({ card }) => {
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