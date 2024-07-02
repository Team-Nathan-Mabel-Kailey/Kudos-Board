import './CardDetail.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from '../Modal/Modal';


const CardDetail = () => {
    const { cardId } = useParams();
    const [selectedCard, setSelectedCard] = useState(null);

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
                />
            )}
        </>
        
    )
}

export default CardDetail
