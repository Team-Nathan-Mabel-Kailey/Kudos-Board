import './BoardModal.css'
import PropTypes from 'prop-types';
import axios from "axios";
import { useState } from "react";

const BoardModal = ({ onClose, onCreation }) => {
    //Modal variables
    const[title, setTitle] = useState("");
    const[category, setCategory] = useState("");
    const[author, setAuthor] = useState("");

    const handleCreateBoard = async () => {
        try {
            //Required fields
            if (!title || !category) {
                alert("Fill out author and category fields!");
                return;
            }

            //Optional author name, defaults to "Author" if no name
            let updatedAuthor = author;

            if (author.trim() === "") {
                updatedAuthor = "Author";
            }

            await axios.post(`http://localhost:3000/boards`, {
                title: title,
                category: category,
                author: updatedAuthor,
                cards: []
            });

            onCreation();
            //Reset fields for future user input
            setTitle("");
            setCategory("");
            setAuthor("");

        } catch (error) {
            console.error("Error creating board:", error);
        }
    }

    const handleBoardTitleInput = (e) => {
        setTitle(e.target.value);
    };

    const handleBoardCategorySelection = (e) => {
        setCategory(e.target.value);
    };

    const handleBoardAuthorInput = (e) => {
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
                        <h2>Create a board</h2>
                        <div className='modal-inputs'>
                            <input type='text' placeholder='Enter Board Title' value={title} onChange={handleBoardTitleInput}/>

                            <select value={category} onChange={handleBoardCategorySelection}>
                                <option value="">Select category</option>
                                <option value="Recent">Recent</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Thank You">Thank You</option>
                                <option value="Inspiration">Inspiration</option>
                            </select>

                            <input type='text' placeholder='Enter Author Name' value={author} onChange={handleBoardAuthorInput}/>
                            <button className='modal-create-button' onClick={handleCreateBoard}>Create Board</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardModal;

BoardModal.propTypes = {
    onClose: PropTypes.func.isRequired
};