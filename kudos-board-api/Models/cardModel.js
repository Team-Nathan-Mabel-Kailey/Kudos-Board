const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCard = async (cardData) => {
    return await prisma.card.create({
    data: {
        board: { connect: { board_id: cardData.board_id } },
        message: cardData.message,
        gifUrl: cardData.gifUrl,
        author: cardData.author,
    }
    });
};

const getAllCards = async () => {
    return prisma.card.findMany();
};

const getCardById = async (id) => {
    return prisma.card.findUnique({
    where: {
        card_id: parseInt(id),
    },
    });
};

const updateCard = async (id, cardData) => {
    return prisma.card.update({
    where: {
        card_id: parseInt(id),
    },
    data: cardData,
    });
};

const deleteCard = async (id) => {
    return prisma.card.delete({
    where: {
        card_id: parseInt(id),
    },
    });
};

const upvoteCard = async (id) => {
    return prisma.card.update({
        where: {
            card_id: parseInt(id),
        },
        data: {
            upvotes: {
                increment: 1,
            },
        },
    });
};


const getCardsInBoard = async (boardId) => {
    return prisma.card.findMany({
    where: {
        boardId: parseInt(boardId),
    },
    });
};

module.exports = {
    createCard,
    getAllCards,
    getCardById,
    updateCard,
    deleteCard,
    upvoteCard,
    getCardsInBoard,
};
