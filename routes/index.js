const router = require('express').Router();
const userRouter = require('./users');
const cardRouter = require('./cards');
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const UnauthorizedError = require('../errors/UnauthorizedError');

router.post('/signin', login);
router.post('/signup', createUser);

router.use(auth);

router.use('/users', userRouter);
router.use('/cards', cardRouter);
router.use('*', (req, res, next) => {
  next(new UnauthorizedError('Необходима авторизация'));
});

module.exports = router;
