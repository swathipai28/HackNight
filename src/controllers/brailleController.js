// src/controllers/brailleController.js

// const { convertToBraille } = require('../utils/brailleConversion');

// exports.convertTextToBraille = async (req, res) => {
//   try {
//     const { text } = req.body;
//     if (!text) {
//       return res.status(400).json({ message: "Text input is required." });
//     }
//     // Call the utility function to convert text to Braille
//     const brailleText = await convertToBraille(text);
//     res.status(200).json({ brailleText });
//   } catch (error) {
//     res.status(500).json({ message: "Error converting text to Braille", error: error.message });
//   }
// };
// src/controllers/brailleController.js

// const convertTextToBraille = (req, res) => {
//     const { text } = req.body;
  
//     // Example logic for Braille conversion (you can replace this with your actual logic)
//     const brailleText = textToBraille(text); // Assuming textToBraille is a function that converts text to Braille
  
//     res.status(200).json({ brailleText });
//   };
  
//   module.exports = { convertTextToBraille };
// src/controllers/brailleController.js

// Simple function to convert text to Braille (you can improve or replace it with a real conversion algorithm)

//second code
/*const textToBraille = (text) => {
    const brailleDictionary = {
      'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑',
      'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
      'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕',
      'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞',
      'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽',
      'z': '⠵', ' ': '⠀'
    };
  
    return text.toLowerCase().split('').map(char => brailleDictionary[char] || '').join('');
  };
  
  // Controller function to handle text to Braille conversion request
  const convertTextToBraille = (req, res) => {
    const { text } = req.body;
  
    if (!text) {
      return res.status(400).json({ message: "Text is required for conversion." });
    }
  
    // Convert the text to Braille
    const brailleText = textToBraille(text);
  
    // Return the Braille text in the response
    res.status(200).json({ brailleText });
  };
  
  module.exports = { convertTextToBraille };
 */


/*const textToBraille = (text) => {
  const brailleDictionary = {
    'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑',
    'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
    'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕',
    'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞',
    'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽',
    'z': '⠵', ' ': '⠀'
  };

  return text.toLowerCase().split('').map(char => brailleDictionary[char] || '').join('');
};

module.exports = { textToBraille };
*/

// src/controllers/brailleController.js

/*const textToBraille = (text) => {
    // Your Braille conversion logic
    return text.toLowerCase().split('').map(char => brailleDictionary[char] || '').join('');
  };
  
  const convertTextToBraille = (req, res) => {
    const { text } = req.body;
  
    if (!text) {
      return res.status(400).json({ message: "Text is required for conversion." });
    }
  
    const brailleText = textToBraille(text); // Convert to Braille
  
    res.status(200).json({ brailleText });
  };
  
  module.exports = { convertTextToBraille };
  */

  /*
  const path = require('path');
  const fs = require('fs');
  const multer = require('multer');
  
  // Define the storage engine for multer
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directory to store uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Create a unique file name
    }
  });
  
  const upload = multer({ storage });
  
  // Controller logic to convert text to Braille
  exports.convertTextToBraille = async (req, res) => {
    // Handle the file upload here
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
  
    try {
      const imagePath = req.file.path;
      
      // Here you can add logic to process the uploaded image
      // For now, we are just returning the image path
      return res.status(200).json({ brailleText });
  
    } catch (error) {
      return res.status(500).json({ message: 'Error processing the image', error: error.message });
    }
  };
  */

  const brailleConverter = require('../utils/brailleConverter'); // Your Braille conversion utility

// Controller logic to convert text to Braille
exports.convertTextToBraille = async (req, res) => {
  const text = req.body.text;  // Assume the text is being passed in the body
  if (!text) {
    return res.status(400).json({ message: 'No text provided' });
  }

  try {
    // Convert text to Braille
    const brailleText = brailleConverter.convertToBraille(text);

    // Return the Braille version of the text
    res.status(200).json({ brailleText });

  } catch (error) {
    return res.status(500).json({ message: 'Error processing the text', error: error.message });
  }
};

  
  

