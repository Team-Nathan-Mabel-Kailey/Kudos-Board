import './BoardModal.css'
import axios from "axios";
import { useState } from "react";
import PropTypes from 'prop-types';

const BoardModal = ({ onClose, onCreation }) => {

    const[title, setTitle] = useState("");
    const[category, setCategory] = useState("");
    const[author, setAuthor] = useState("");

    const handleCreateBoard = async () => {
        try {
            /* if(!description || !gif) {
                alert("Fill out all fields!");
                return;
            } */

            const response = await axios.post(`http://localhost:3000/boards`, {
                title: title,
                category: category,
                author: author,
                cards: []
            });

            onCreation();
            setTitle("");
            setCategory("");
            setAuthor("");

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
                            <input type='text' placeholder='Enter Board Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="">Select category</option>
                                <option value="Recent">Recent</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Thank You">Thank You</option>
                                <option value="Inspiration">Inspiration</option>
                            </select>
                            <input type='text' placeholder='Enter Author Name' value={author} onChange={(e) => setAuthor(e.target.value)}/>
                            <button className='modal-create-button' onClick={handleCreateBoard}>Create Board</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardModal

BoardModal.propTypes = {
    onClose: PropTypes.func.isRequired
};