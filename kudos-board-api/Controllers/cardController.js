const cardModel = require('../models/cardModel');

const createCard = async (req, res) => {
    const { message, gifUrl, author, boardId } = req.body;
    try {
        const newCard = await cardModel.createCard({ message, gifUrl, author, boardId });
        res.status(201).json(newCard);
    } catch (error) {
        console.error('Error while creating card:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const getAllCards = async (req, res) => {
    try {
        const cards = await cardModel.getAllCards();
        res.status(200).json(cards);
    } catch (error) {
        console.error('Error while getting cards:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const getCardById = async (req, res) => {
    const { id } = req.params;
    try {
        const card = await cardModel.getCardById(id);
        if (card) {
            res.status(200).json(card);
        } else {
            res.status(404).json({ error: 'Card not found' });
        }
    } catch (error) {
        console.error('Error while getting card:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const updateCard = async (req, res) => {
    const cardId = req.params.card_id;
    const cardData = req.body;
    try {
        const updatedCard = await cardModel.updateCard(cardId, cardData);
        if (updatedCard) {
            res.status(200).json(updatedCard);
        } else {
            res.status(404).json({ error: 'Card not found' });
        }
    } catch (error) {
        console.error('Error while updating card:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const deleteCard = async (req, res) => {
    const cardId = req.params.card_id;
    try {
        const deletedCard = await cardModel.deleteCard(cardId);
        if (deletedCard) {
            res.status(200).json(deletedCard);
        } else {
            res.status(404).json({ error: 'Card not found' });
        }
    } catch (error) {
        console.error('Error while deleting card:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const upvoteCard = async (req, res) => {
    const { id } = req.params;
    try {
        const card = await upvoteCard(id);
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: 'Failed to upvote card' });
    }
};

const getCardsInBoardController = async (req, res) => {
    try {
        const { boardId } = req.params;
        const cards = await getCardsInBoard(boardId);
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cards for the board' });
    }
};

module.exports = {
    createCard,
    getAllCards,
    getCardById,
    updateCard,
    deleteCard,
    upvoteCard,
    getCardsInBoardController,
};
