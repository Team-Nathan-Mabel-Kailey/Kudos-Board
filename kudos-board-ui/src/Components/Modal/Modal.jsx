import './Modal.css'
import PropTypes from 'prop-types';

const Modal = ({show, onClose}) => {
    
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
                            <input type='text' placeholder='Enter Card Title' />
                            <input type='text' placeholder='Enter Card Description' />
                            <input type='text' placeholder='Search GIFs...' />
                            <button className='modal-search-button'>Search</button>

                            <div className='modal-gif-results'></div>

                            <input type='text' placeholder='Enter GIF URL' />
                            <button className='modal-search-button'>Copy GIF URL</button>

                            <input type='text' placeholder='Enter Owner (optional)' />
                            <button className='modal-create-button'>Create Card</button>
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