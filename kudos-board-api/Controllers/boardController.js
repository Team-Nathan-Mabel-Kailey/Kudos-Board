const boardModel = require('../Models/boardModel');
const cardModel = require('../Models/cardModel');

const createBoard = async (req, res) => {
    const { title, category, author, cards } = req.body
    console.log('requested body:', req.body);
    try {
        const newBoard = await boardModel.createBoard({ title, category, author });
        console.log('new board:', newBoard);
        const createdCards = await Promise.all(cards.map(item => cardModel.addCardToBoard(newBoard.board_id, item)));
        console.log('created cards:', createdCards);
        res.status(201).json({...newBoard, cards: createdCards});
    } catch (error) {
        console.error('Error while creating order:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const getAllBoards = async (req, res) => {
    try {
        const boards = await boardModel.getAllBoards();
        res.status(200).json(boards);
    } catch (error) {
        console.error('Error while getting boards:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const getBoardById = async (req, res) => {
    const boardId = res.params.board_id
    try {
        const board = await boardModel.getBoardById(boardId);
        res.status(200).json(board);
    } catch (error) {
        console.error('Error while getting board:', error.message);
        res.status(400).json({ error: error.message });
    }
    if (!board) {
        res.status(404).json({ error: 'Board not found' });
    }
};

const updateBoard = async (req, res) => {
    const boardId = req.params.board_id;
    const boardData = req.body;
    try {
        const updatedBoard = await boardModel.updateBoard(boardId, boardData);
        res.status(200).json(updatedBoard);
        if (updatedBoard) {
            res.status(200).json(updatedBoard);
        } else {
            res.status(404).json({ error: 'Board not found' });
        }
    } catch (error) {
        console.error('Error while updating board:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const deleteBoard = async (req, res) => {
    try {
        const deletedBoard = await boardModel.deleteBoard(req.params.board_id);
        if (deletedBoard) {
            res.status(200).json(deletedBoard);
        } else {
            res.status(404).json({ error: 'Board not found' });
        }
    } catch (error) {
        console.error('Error while deleting board:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const addCardToBoard = async (req, res) => {
    const { board_id } = req.params;
    const { message, gifUrl, author } = req.body;
    try {
        const boardId = await boardModel.getBoardById(board_id);
        if (!boardId) {
            res.status(404).json({ error: 'Board not found' });
        }
        const newCard = await cardModel.createCard({ 
            boardId : parseInt(boardId), 
            message, 
            gifUrl, 
            author 
        });
        res.status(201).json(newCard);
    } catch (error) {
        console.error('Error while adding card to board:', error.message);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createBoard,
    getAllBoards,
    getBoardById,
    updateBoard,
    deleteBoard,
    addCardToBoard,
};