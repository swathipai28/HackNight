// // controllers/pdfController.js
// const multer = require('multer');
// const path = require('path');

// // Multer storage setup
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Directory for storing uploaded files
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
//     }
// });

// const upload = multer({ storage: storage }).single('pdf'); // Key name 'pdf'

// exports.convertPdfToBraille = (req, res) => {
//     upload(req, res, (err) => {
//         if (err) {
//             return res.status(400).json({ message: 'File upload error', error: err.message });
//         }
//         if (!req.file) {
//             return res.status(400).json({ message: 'No file uploaded' });
//         }

//         // Process the PDF and convert to Braille here
//         const filePath = req.file.path;
//         // Add logic for PDF to Braille conversion

//         res.status(200).json({ message: 'PDF processed successfully', filePath });
//     });
// };
// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage }).single('pdf');

// exports.convertPdfToBraille = (req, res) => {
//     upload(req, res, (err) => {
//         if (err) {
//             return res.status(400).json({ message: 'File upload error', error: err.message });
//         }
//         if (!req.file) {
//             return res.status(400).json({ message: 'No file uploaded' });
//         }

//         const filePath = req.file.path;
//         // Logic for converting PDF to Braille

//         res.status(200).json({ message: 'PDF processed successfully', filePath });
//     });
// };

const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const brailleConverter = require('../utils/brailleConverter'); // Import your Braille conversion utility

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to store uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Create a unique file name
    }
});

const upload = multer({ storage }).single('pdf');

exports.convertPdfToBraille = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: 'File upload error', error: err.message });
        }
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const filePath = req.file.path;

        // Read and parse the PDF
        const pdfData = fs.readFileSync(filePath);
        pdfParse(pdfData)
            .then((data) => {
                const extractedText = data.text; // Extracted text from the PDF

                // Convert the extracted text to Braille
                const brailleText = brailleConverter.convertToBraille(extractedText);

                // Return the Braille version of the text
                res.status(200).json({ brailleText });
            })
            .catch((error) => {
                console.error('PDF Parsing Error:', error);
                res.status(500).json({ message: 'Error parsing the PDF', error: error.message });
            });
    });
};
