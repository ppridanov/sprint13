const router = require('express').Router();
const Card = require('../models/card');
const {
  createCard,
  deleteCard,
  getAllCards,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.post('/cards', createCard);
router.delete('/cards/:cardId', deleteCard);
router.get('/cards/', getAllCards);
router.put('/cards/:cardId/likes', likeCard);
router.delete('/cards/:cardId/likes', dislikeCard);
module.exports = router;
