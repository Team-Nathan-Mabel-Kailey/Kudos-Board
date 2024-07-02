import './Modal.css'
import PropTypes from 'prop-types';
import axios from "axios";
import { useState } from "react";

const Modal = ({show, onClose, cardId}) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[owner, setOwner] = useState("");

    const [gifOptions, setGifOptions] = useState([]);
    const [selectedGif, setSelectedGif] = useState(null); 
    const [gif, setGif] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    if(!show) {
        return null;
    }

    const getGifs = async () => {
        try {
            const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=6&q=${searchTerm}`);
            
            const data = await response.data.data;
            const gifUrl = data.map((gif) => gif.images.original.url);

            setGifOptions(gifUrl);

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSelectGif = (gifUrl) => {
        setGif(gifUrl);
        setSelectedGif(gifUrl);
        setGifOptions([]);
    }

    const handleCreateCard = () => {
        try {
            if(!title || !description || !gif) {
                alert("Fill out all fields!");
                return;
            }

            const response = axios.post(`http://localhost:3000//card-details/${cardId}/cards`, {
                title: title,
                description: description,
                gif: gif,
                owner: 'owner',
            });

            const newCard = response.data;

            onSuccess(newCard);
            setTitle("");
            setDescription("");
            setGif("");
            setOwner("");

            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div className='modal' onClick={onClose}>
                <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                    <div className='modal-header'>
                        <button className="close-button" onClick={onClose}>X</button>
                    </div>

                    <div className='modal-body'>
                        <h2>Create a board</h2>

                        <div className='modal-inputs'>
                            <input type='text' placeholder='Enter Card Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                            <input type='text' placeholder='Enter Card Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                            <input type='text' placeholder='Search GIFs...' value = {searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                            <button className='modal-search-button' onClick={getGifs}>Search</button>

                            {gifOptions.length > 0 && (
                                <div className="modal-gif-results">
                                    {gifOptions.map((gifUrl, index) => (
                                        <div className="gif-container" key={index}>
                                            <img
                                            className="gif"
                                            src={gifUrl}
                                            alt="GIF"
                                            onClick={() => handleSelectGif(gifUrl)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}


                            <input type='text' placeholder='Enter GIF URL' onChange={(e) => setGif(e.target.value)}/>
                            <button className='modal-search-button'>Copy GIF URL</button>

                            <input type='text' placeholder='Enter Owner (optional)' value={owner} onChange={(e) => setOwner(e.target.value)}/>
                            <button className='modal-create-button' onClick={handleCreateCard}>Create Card</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};