// src/routes/userRoutes.js

const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Route to get user profile (protected)
router.get('/profile', protect, getUserProfile);

// Route to update user profile (protected)
router.put('/profile', protect, updateUserProfile);

module.exports = router;
