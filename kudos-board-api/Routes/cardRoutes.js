const express = require('express');
const {
    createCard,
    getAllCards,
    getCardById,
    updateCard,
    deleteCard,
    upvoteCard,
    getCardsInBoardController,
} = require('../Controllers/cardController');

const router = express.Router();

router.post('/', createCard);
router.get('/', getAllCards);
router.get('/:id', getCardById);
router.put('/:card_id', updateCard);
router.delete('/:card_id', deleteCard);
router.put('/:id/upvote', upvoteCard);
router.get('/board/:boardId', getCardsInBoardController);

module.exports = router;
