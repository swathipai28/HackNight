// // src/controllers/ocrController.js

// const { extractTextFromImage } = require('../utils/ocr');
// const { convertToBraille } = require('../utils/brailleConversion');

// exports.processImageAndConvertToBraille = async (req, res) => {
//   try {
//     const { imagePath } = req.body;
//     if (!imagePath) {
//       return res.status(400).json({ message: "Image path is required." });
//     }
//     // Extract text from the image using OCR
//     const extractedText = await extractTextFromImage(imagePath);
//     if (!extractedText) {
//       return res.status(400).json({ message: "Failed to extract text from the image." });
//     }
//     // Convert the extracted text to Braille
//     const brailleText = await convertToBraille(extractedText);
//     res.status(200).json({ extractedText, brailleText });
//   } catch (error) {
//     res.status(500).json({ message: "Error processing image and converting to Braille", error: error.message });
//   }
// };
// src/controllers/ocrController.js

// src/controllers/ocrController.js

/*const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');
const { textToBraille } = require('./brailleController'); // Import the textToBraille function

const convertImageToText = (req, res) => {
  const imagePath = req.file.path;

  Tesseract.recognize(
    imagePath,
    'eng',
    { logger: (m) => console.log(m) }
  )
  .then(({ data: { text } }) => {
    fs.unlinkSync(imagePath); // Remove image after processing

    if (!text) {
      return res.status(400).json({ message: "No text detected in the image." });
    }

    const brailleText = textToBraille(text); // Convert OCR text to Braille

    res.status(200).json({ brailleText });
  })
  .catch((error) => {
    fs.unlinkSync(imagePath); // Remove image on error
    res.status(500).json({ message: "Error processing image", error });
  });
};

module.exports = { convertImageToText };
*/


// const multer = require('multer');
// const path = require('path');

// // Set up multer storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Directory to store uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique file name based on the timestamp
//   }
// });

// // Initialize multer with the storage configuration
// const upload = multer({ storage });

// // Your OCR conversion logic
// exports.convertImageToText = [upload.single('image'), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   try {
//     const imagePath = req.file.path;

//     // Implement your image-to-text conversion logic here
//     // For example, use Tesseract.js to extract text from the uploaded image

//     // const text = await ocrConversionFunction(imagePath); // Call OCR function

//     // If OCR is successful, return the extracted text
//     return res.status(200).json({ message: 'OCR conversion successful', text: "Extracted text from the image" });

//   } catch (error) {
//     return res.status(500).json({ message: 'Error processing the image', error: error.message });
//   }
// }];

/*
const multer = require('multer');
const path = require('path');
const Tesseract = require('tesseract.js');
const brailleConverter = require('../utils/brailleConverter');  // Import Braille conversion utility

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// OCR to Braille conversion controller
exports.convertImageToText = [upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const imagePath = req.file.path;

    // Use Tesseract to extract text from the image
    Tesseract.recognize(
      imagePath,
      'eng',  // Language, modify if needed
      {
        logger: (m) => console.log(m), // For logging progress
      }
    ).then(({ data: { text } }) => {
      // Convert the extracted text to Braille
      const brailleText = brailleConverter.convertToBraille(text);

      // Return the Braille version of the text
      res.status(200).json({ brailleText });

    }).catch((error) => {
      console.error('OCR Error:', error);
      return res.status(500).json({ message: 'Error processing the image for OCR', error: error.message });
    });

  } catch (error) {
    return res.status(500).json({ message: 'Error processing the image', error: error.message });
  }
}];
*/

const multer = require('multer');
const path = require('path');
const Tesseract = require('tesseract.js');
const brailleConverter = require('../utils/brailleConverter');  // Import Braille conversion utility

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// OCR to Braille conversion controller
exports.convertImageToText = [upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const imagePath = req.file.path;

    // Use Tesseract to extract text from the image
    Tesseract.recognize(
      imagePath,
      'eng',  // Language, modify if needed
      {
        logger: (m) => console.log(m), // For logging progress
      }
    ).then(({ data: { text } }) => {
      // Convert the extracted text to Braille
      const brailleText = brailleConverter.convertToBraille(text);

      // Return the Braille version of the text
      res.status(200).json({ brailleText });

    }).catch((error) => {
      console.error('OCR Error:', error);
      return res.status(500).json({ message: 'Error processing the image for OCR', error: error.message });
    });

  } catch (error) {
    return res.status(500).json({ message: 'Error processing the image', error: error.message });
  }
}];



// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
// const Tesseract = require('tesseract.js');
// const pdfParse = require('pdf-parse'); // For extracting text from PDFs
// const brailleConverter = require('../utils/brailleConverter'); // Import Braille conversion utility

// // Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Directory to store uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
//   }
// });

// const upload = multer({ storage });

// // OCR to Braille conversion (Image)
// exports.convertImageToText = [upload.single('image'), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   try {
//     const imagePath = req.file.path;

//     // Use Tesseract to extract text from the image
//     Tesseract.recognize(
//       imagePath,
//       'eng',  // Language, modify if needed
//       {
//         logger: (m) => console.log(m), // Log progress
//       }
//     ).then(({ data: { text } }) => {
//       // Convert extracted text to Braille
//       const brailleText = brailleConverter.convertToBraille(text);

//       // Return Braille text
//       res.status(200).json({ brailleText });
//     }).catch((error) => {
//       console.error('OCR Error:', error);
//       return res.status(500).json({ message: 'Error processing the image for OCR', error: error.message });
//     });
//   } catch (error) {
//     return res.status(500).json({ message: 'Error processing the image', error: error.message });
//   }
// }];

// // PDF to Braille conversion
// exports.convertPdfToText = [upload.single('pdf'), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   try {
//     const pdfPath = req.file.path;

//     // Read and extract text from the PDF using pdf-parse
//     const dataBuffer = fs.readFileSync(pdfPath);
//     const pdfData = await pdfParse(dataBuffer);

//     const text = pdfData.text; // Extracted text from the PDF

//     // Convert the extracted text to Braille
//     const brailleText = brailleConverter.convertToBraille(text);

//     // Return the Braille text
//     res.status(200).json({ brailleText });
//   } catch (error) {
//     console.error('Error processing the PDF:', error);
//     return res.status(500).json({ message: 'Error processing the PDF', error: error.message });
//   }
// }];
