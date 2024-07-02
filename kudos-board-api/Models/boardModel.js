const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createBoard = async (boardData) => {
    return prisma.board.create({
        data: boardData,
    });
};

const getAllBoards = async () => {
    return prisma.board.findMany();
};

const getBoardById = async (id) => {
    return prisma.board.findUnique({
        where: {
            board_id: parseInt(id),
        },
        include: {
            cards: true,
        },
    });
};

const updateBoard = async (id, boardData) => {
    return prisma.board.update({
        where: {
            board_id: parseInt(id),
        },
        data: boardData,
    });
};

const deleteBoard = async (id) => {
    return prisma.board.delete({
        where: {
            board_id: parseInt(id),
        },
    });
};

const addCardToBoard = async (boardId, boardData) => {
    console.log('boardData:', boardData);
    let card = prisma.card.create({
        data: {
            board_id: parseInt(boardId),
            ...boardData,
        }
    }); 
    return card;
};

const getCardsInBoard = async (board_id) => {
    return prisma.board.findMany({
        where: {
            board_id: parseInt(board_id),
        },
    })
};

module.exports = {
    createBoard,
    getAllBoards,
    getBoardById,
    updateBoard,
    deleteBoard,
    addCardToBoard,
    getCardsInBoard,
};
