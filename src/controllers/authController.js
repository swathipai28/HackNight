// src/controllers/authController.js

// Example of registerUser function
const registerUser = (req, res) => {
    // Registration logic here
    res.status(200).json({ message: "User registered successfully" });
  };
  
  // Example of loginUser function
  const loginUser = (req, res) => {
    // Login logic here
    res.status(200).json({ message: "User logged in successfully" });
  };
  
  module.exports = { registerUser, loginUser };
  