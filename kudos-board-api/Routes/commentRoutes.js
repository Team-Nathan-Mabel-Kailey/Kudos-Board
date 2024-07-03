const express = require('express');
const {
    createComment,
    getCommentsByCardId,
} = require('../Controllers/commentController');

const router = express.Router();

router.post('/', createComment);
router.get('/card/:card_id', getCommentsByCardId);

module.exports = router;
