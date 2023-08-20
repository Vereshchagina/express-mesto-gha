const jsonwebtoken = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const auth = (req, res, next) => {
  const { jwt } = req.cookies;

  if (!jwt) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }

  let payload;

  try {
    payload = jsonwebtoken.verify(jwt, 'some-secret-key');
  } catch (err) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }

  req.user = payload;

  return next();
};

module.exports = auth;
