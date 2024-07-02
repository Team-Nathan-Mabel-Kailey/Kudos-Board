import './BoardModal.css'
import PropTypes from 'prop-types';

const BoardModal = ({show, onClose}) => {
    
    if(!show) {
        return null;
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
                            <input type='text' placeholder='Enter Board Title' />
                            <select>
                                <option value="">Select category</option>
                                <option value="a">Recent</option>
                                <option value="b">Celebration</option>
                                <option value="c">Thank You</option>
                                <option value="c">Inspiration</option>
                            </select>
                            <input type='text' placeholder='Enter Author Name' />
                            <button className='modal-create-button'>Create Board</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardModal

BoardModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};