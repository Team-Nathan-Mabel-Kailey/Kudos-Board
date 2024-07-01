import './CardDetail.css'
import { useParams } from "react-router-dom";


const CardDetail = () => {
    const { cardId } = useParams();

    return (
        <div>
            <h1>Card {cardId} Details</h1>
        </div>
    )
}

export default CardDetail
