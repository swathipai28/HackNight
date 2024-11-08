const express = require('express');
const router = express.Router();
const ocrController = require('../controllers/ocrController');

// POST request to upload image and perform OCR
router.post('/convert', ocrController.convertImageToText);

module.exports = router;
