const boardModel = require('../Models/boardModel');
const cardModel = require('../Models/cardModel');

const createBoard = async (req, res) => {
    const { title, category, author, cards } = req.body;
    try {
        const newBoard = await boardModel.createBoard({ title, category, author });
        console.log('newBoard:', newBoard);
        const createdCards = await Promise.all(cards.map(item => boardModel.addCardToBoard( newBoard.board_id , item)));
        res.status(201).json({ ...newBoard, cards: createdCards });
    } catch (error) {
        console.error('Error while creating board:', error.message);
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
    const { board_id } = req.params;
    try {
        const board = await boardModel.getBoardById(board_id);
        if (board) {
            const boardCards = await cardModel.getCardsInBoard(board_id);
            res.status(200).json({...board, boardCards});
        } else {
            res.status(404).json({ error: 'Board not found' });
        }
    } catch (error) {
        console.error('Error while getting board:', error.message);
        res.status(400).json({ error: error.message });
    }
};

const updateBoard = async (req, res) => {
    const { board_id } = req.params;
    const boardData = req.body;
    try {
        const updatedBoard = await boardModel.updateBoard(board_id, boardData);
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

const getCardsInBoard = async (req, res) => {
    const { board_id } = req.params;
    try {
        const cards = await cardModel.getCardsInBoard(board_id);
        res.status(200).json(cards);
    } catch (error) {
        console.error('Error while getting cards in board:', error.message);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createBoard,
    getAllBoards,
    getBoardById,
    updateBoard,
    deleteBoard,
    getCardsInBoard,
};