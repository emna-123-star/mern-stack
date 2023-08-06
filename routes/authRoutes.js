const express = require('express');
const { signup, logout, signin, userProfile } = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/auth');

const router = express.Router();

//api signup
//auth routes
router.post('/signup', signup);
//api signup
//auth routes
router.post('/signin', signin);
//auth routes
router.get('/logout', logout);
// /api/me
router.get('/me'  ,isAuthenticated,userProfile,isAuthenticated);

module.exports = router;