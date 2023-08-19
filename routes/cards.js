const router = require('express').Router();
const { validatePostCard, validateGetCardById } = require('../middlewares/validation');

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/cards', getCards);
router.post('/cards', validatePostCard, createCard);
router.delete('/cards/:cardId', validateGetCardById, deleteCard);
router.put('/cards/:cardId/likes', validateGetCardById, likeCard);
router.delete('/cards/:cardId/likes', validateGetCardById, dislikeCard);

module.exports = router;
