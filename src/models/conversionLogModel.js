// src/models/conversionLogModel.js

const mongoose = require('mongoose');

const conversionLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // References the User model
      required: true,
    },
    originalText: {
      type: String,
      required: true,
    },
    brailleText: {
      type: String,
      required: true,
    },
    conversionType: {
      type: String,
      enum: ['TEXT_TO_BRAILLE', 'OCR_TO_BRAILLE'], // Defines the types of conversion
      required: true,
    },
    imagePath: {
      type: String,
      default: null, // Optional field, used if conversion involves OCR
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('ConversionLog', conversionLogSchema);
