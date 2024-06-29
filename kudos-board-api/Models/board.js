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

module.exports = {
    createBoard,
    getAllBoards,
    getBoardById,
    updateBoard,
    deleteBoard,
};
