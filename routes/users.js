const router = require('express').Router();
const { validatePatchUserInfo, validatePatchAvatar, validateGetUserById } = require('../middlewares/validation');

const {
  getUsers,
  getUserById,
  updateUser,
  updateAvatar,
  getMyProfile,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:userId', validateGetUserById, getUserById);
router.get('/me', getMyProfile);
router.patch('/users/me', validatePatchUserInfo, updateUser);
router.patch('/users/me/avatar', validatePatchAvatar, updateAvatar);

module.exports = router;
