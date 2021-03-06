const express = require('express');
const router = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  userInfo,
} = require('../controllers/user.js');

const { protect } = require('../middlewares/auth');

// @desc Admin routes
router.route('/admin').get(getUsers).post(createUser);
router.route('/admin/:id').put(updateUser).delete(deleteUser);

// @desc Visitors routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, userInfo);

module.exports = router;
