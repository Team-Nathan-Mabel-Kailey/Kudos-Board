const commentModel = require('../Models/commentModel');

const createComment = async (req, res) => {
    const { message, author, cardId } = req.body;
    try {
        const newComment = await commentModel.createComment({ message, author, cardId });
        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error while creating comment:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const getCommentsByCardId = async (req, res) => {
    const { card_id } = req.params;
    try {
        const comments = await commentModel.getCommentsByCardId(card_id);
        res.status(200).json(comments);
    } catch (error) {
        console.error('Error while fetching comments:', error.message);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createComment,
    getCommentsByCardId,
};
