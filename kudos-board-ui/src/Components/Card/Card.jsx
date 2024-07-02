import './Card.css'
import { BrowserRouter as Route, Routes, Link, BrowserRouter } from "react-router-dom";


const Card = (cardNum, viewBoard, deleteBoard) => {
    return (
            <div className="home-card">
                <div className="card-content">
                    <img src={"https://picsum.photos/300/400"} alt={"title"}/>
                    <h2 className="card-title">{cardNum.title}</h2>
                    <h3 className="card-category">{cardNum.category}</h3>

                    <div className="card-buttons">
                        <Link to={`/card-details/${cardNum.card_id}`}><button className="view-button">View Board</button></Link>
                        
                        <button className="delete-button" onClick={deleteBoard}>Delete Board</button>
                    </div>
                </div>
            </div>
    )
}

export default Card
