import './Modal.css'
import PropTypes from 'prop-types';
import axios from "axios";
import { useState } from "react";

const Modal = ({ boardId, onClose, onCreation }) => {
    //Api Key 
    const apiKey = import.meta.env.VITE_API_KEY;

    //Modal variables
    const[title, setTitle] = useState("");
    const[message, setMessage] = useState("");
    const[author, setAuthor] = useState("");

    //Gif variables
    const [gifOptions, setGifOptions] = useState([]);
    const [gif, setGif] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const getGifs = async () => {
        try {
            //Get gifs from Giphy API
            const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=6&q=${searchTerm}`);
            const data = await response.data.data;
            const gifUrl = data.map((gif) => gif.images.original.url);

            //Set gif options
            setGifOptions(gifUrl);

        } catch (error) {
            console.error("Error getting gifs: ", error);
        }
    }

    const handleSelectGif = (gifUrl) => {
        setGif(gifUrl);
        setGifOptions([]);
    }

    const handleCreateCard = async () => {
        try {
            //Required fields
            if (!title || !message || !gif) {
                alert("Fill out title and message fields and select a gif!");
                return;
            }

            //Optional author
            let currentAuthor = author;
            
            if (author.trim() === "") {
                currentAuthor = "Author";
            }

            await axios.post(`http://localhost:3000/cards`, {
                boardId: parseInt(boardId),
                message: message,
                gifUrl: gif,
                author: currentAuthor,
                title: title
            });

            onCreation();
            //Reset fields for future user input
            setTitle("");
            setMessage("");
            setGif("");
            setAuthor("");

        } catch (error) {
            console.error("Error creating card:", error);
        }
    }

    const handleCardTitleInput = (e) => {
        setTitle(e.target.value);
    };

    const handleCardMessageInput = (e) => {
        setMessage(e.target.value);
    };

    const handleGifSearchInput = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCardAuthorInput = (e) => {
        setAuthor(e.target.value);
    };

    return (
        <div>
            <div className='modal' onClick={onClose}>
                <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                    <div className='modal-header'>
                        <button className="close-button" onClick={onClose}>X</button>
                    </div>

                    <div className='modal-body'>
                        <h2>Create a card</h2>

                        <div className='modal-inputs'>
                            <input type='text' placeholder='Enter Title' value={title} onChange={handleCardTitleInput}/>
                            <input type='text' placeholder='Enter Card Description' value={message} onChange={handleCardMessageInput}/>
                            <input type='text' placeholder='Search GIFs...' value = {searchTerm} onChange={handleGifSearchInput}/>
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

                            <input type='text' placeholder='Enter GIF URL' value = {gif} onChange={(e) => setGif(e.target.value)}/>
                            <button className='modal-search-button' onClick={() => {navigator.clipboard.writeText(gif)}}>Copy GIF URL </button>

                            <input type='text' placeholder='Enter Owner (optional)' value={author} onChange={handleCardAuthorInput} />
                            <button className='modal-create-button' onClick={handleCreateCard}>Create Card</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    ) 
} 

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    boardId: PropTypes.string.isRequired,
    onCreation: PropTypes.func.isRequired
}; 