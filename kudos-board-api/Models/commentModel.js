const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createComment = async (commentData) => {
    return prisma.comment.create({
        data: commentData,
    });
};

const getCommentsByCardId = async (cardId) => {
    return prisma.comment.findMany({
        where: {
            cardId: parseInt(cardId),
        },
    });
};

module.exports = {
    createComment,
    getCommentsByCardId,
};
