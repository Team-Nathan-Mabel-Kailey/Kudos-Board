const express = require('express');
const {
    createBoard,
    getAllBoards,
    getBoardById,
    updateBoard,
    deleteBoard,
    getCardsInBoard,
} = require('../Controllers/boardController');

const router = express.Router();

router.post('/', createBoard); 
router.get('/', getAllBoards);
router.get('/:board_id', getBoardById);
router.put('/:board_id', updateBoard);
router.delete('/:board_id', deleteBoard);
router.get('/:board_id/cards', getCardsInBoard);

module.exports = router;
