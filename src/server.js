// const express = require('express');
// const connectDB = require('./config/db');
// const brailleRoutes = require('./routes/brailleRoutes');
// require('dotenv').config();

// const app = express();
// app.use(express.json());
// app.use('/api/braille', brailleRoutes);

// // Connect to Database
// connectDB();

// // Import Routes
// const authRoutes = require('./routes/authRoutes');
// const textRoutes = require('./routes/textRoutes');

// app.use('/api/auth', authRoutes);
// app.use('/api/text', textRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// src/server.js


// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const multer = require('multer');

// const path = require('path');
// const brailleRoutes = require('./routes/brailleRoutes');
// const { convertImageToText } = require('./controllers/ocrController');

// const app = express();

// // Middleware to parse JSON
// app.use(cors())
// app.use(express.json());

// // Set up storage for multer (for handling image uploads)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Save images in 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique filenames
//   }
// });

// const upload = multer({ storage });

// // Use the Braille routes
// app.use('/api/braille', brailleRoutes);

// // Image OCR route
// app.post('/api/braille/convert-image', upload.single('image'), convertImageToText);

// // Connect to MongoDB and start the server
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(process.env.PORT || 5000, () => {
//       console.log('Server is running and connected to MongoDB');
//     });
//   })
//   .catch((err) => console.error(err));

/*
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const brailleRoutes = require('./routes/brailleRoutes');  // Import the braille routes
require('dotenv').config();
// Enable CORS and parse incoming requests
app.use(express.json());

// Use the routes
app.use('/api/braille', brailleRoutes);

// Connect to MongoDB (update with your actual MongoDB URI)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/
const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const brailleRoutes = require('./routes/brailleRoutes');  // Import braille routes

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json());  // Middleware to parse JSON bodies

// Use brailleRoutes for the image conversion endpoint
app.use('/api/braille', brailleRoutes);

mongoose.connect('mongodb+srv://Sharanya_parol9:shashwath@cluster0.hxnpff0.mongodb.net/braille', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



