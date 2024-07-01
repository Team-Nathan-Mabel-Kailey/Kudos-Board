import './Card.css'

const Card = (cardNum, viewBoard, deleteBoard) => {
    return (
        <div className="home-card">
            <div className="card-content">
                <img src={"https://picsum.photos/300/400"} alt={"title"}/>
                <h2 className="card-title">{cardNum.title}</h2>
                <h3 className="card-category">{cardNum.category}</h3>

                <div className="card-buttons">
                    <button className="view-button" onClick={viewBoard}>View Board</button>
                    <button className="delete-button" onClick={deleteBoard}>Delete Board</button>
                </div>
            </div>
        </div>
    )
}

export default Card
