/*
// src/routes/brailleRoutes.js

const express = require('express');
const { convertTextToBraille } = require('../controllers/brailleController');

const router = express.Router();

// Define the POST route for Braille conversion
router.post('/convert', convertTextToBraille);

module.exports = router;
*/

// src/routes/brailleRoutes.js

// src/routes/brailleRoutes.js

/*
const express = require('express');

const { convertTextToBraille } = require('../controllers/brailleController');  // Import Braille conversion from text
const { convertImageToText } = require('../controllers/ocrController'); // Import OCR-based conversion

const router = express.Router();

// Route for converting text to Braille
router.post('/convert', convertTextToBraille);

// Route for converting images to Braille (via OCR)
router.post('/convert-image', convertImageToText);
// router.post('/api/ocr/convert', ocrController.convertImageToText);
module.exports = router;
*/
// const express = require('express');
// const { convertTextToBraille } = require('../controllers/brailleController');  // Import Braille conversion from text
// const { convertImageToText } = require('../controllers/ocrController'); // Import OCR-based conversion

// const router = express.Router();

// // Route for converting text to Braille
// router.post('/convert', convertTextToBraille);

// // Route for converting images to Braille (via OCR)
// router.post('/convert-image', convertImageToText);

// module.exports = router;
// Correctly import your controller functions
const express = require('express');
const { convertTextToBraille } = require('../controllers/brailleController');
const { convertImageToText } = require('../controllers/ocrController');
const { convertPdfToBraille } = require('../controllers/pdfController');

const router = express.Router();

// Define your routes
router.post('/convert', convertTextToBraille);
router.post('/convert-image', convertImageToText);
router.post('/convert-pdf', convertPdfToBraille); // Ensure convertPdfToBraille is defined

module.exports = router;



