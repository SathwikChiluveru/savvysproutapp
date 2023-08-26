const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account.controller');

// Example route definitions
router.get('/getAllAccounts', accountController.getAllAccounts); // Make sure this function is defined in account.controller.js
router.post('/createNewAccount', accountController.createNewAccount);

module.exports = router;
