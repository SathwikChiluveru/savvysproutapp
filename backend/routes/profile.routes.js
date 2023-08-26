const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');

// Example route definitions
router.get('/getAllProfiles', profileController.getAllProfiles); // Make sure this function is defined in account.controller.js
router.get('/updateProfile', profileController.updateProfile);

module.exports = router;