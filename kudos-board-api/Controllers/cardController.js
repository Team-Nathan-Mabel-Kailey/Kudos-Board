const cardModel = require('../Models/cardModel');

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
    const { card_id } = req.params;
    try {
        const card = await cardModel.getCardById(card_id);
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
    const { card_id } = req.params;
    const cardData = req.body;
    try {
        const updatedCard = await cardModel.updateCard(card_id, cardData);
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
    const { card_id } = req.params;
    try {
        const deletedCard = await cardModel.deleteCard(card_id);
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
    const { card_id } = req.params;
    try {
        const card = await upvoteCard(card_id);
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: 'Failed to upvote card' });
    }
};

module.exports = {
    createCard,
    getAllCards,
    getCardById,
    updateCard,
    deleteCard,
    upvoteCard,
};
