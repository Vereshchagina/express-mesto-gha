const { celebrate, Joi } = require('celebrate');

const regularUrl = /https?:\/\/(www\.)?[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]+#*/i;

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateGetUserById = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex().required(),
  }),
});

const validatePostUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(regularUrl),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validatePatchUserInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
});

const validatePatchAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().pattern(regularUrl),
  }),
});

const validateGetCardById = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
});

const validatePostCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required(),
  }),
});

module.exports = {
  validateLogin,
  validateGetUserById,
  validatePostUser,
  validatePatchUserInfo,
  validatePatchAvatar,
  validateGetCardById,
  validatePostCard,
};
