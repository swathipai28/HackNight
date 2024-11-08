const express = require('express');
const { extractTextFromImage, convertToBraille } = require('../utils/ocr');
const router = express.Router();

router.post('/convert-image', async (req, res) => {
  try {
    const { imagePath } = req.body;
    const extractedText = await extractTextFromImage(imagePath);
    const brailleText = await convertToBraille(extractedText);
    res.json({ brailleText });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
