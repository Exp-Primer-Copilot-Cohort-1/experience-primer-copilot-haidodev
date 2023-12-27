// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middlewares/auth');

router.post('/', auth, commentController.createComment);
router.get('/', auth, commentController.getAllComments);
router.get('/:id', auth, commentController.getOneComment);
router.put('/:id', auth, commentController.updateComment);
router.delete('/:id', auth, commentController.deleteComment);

module.exports = router;