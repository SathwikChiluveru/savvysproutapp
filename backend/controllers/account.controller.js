const Account = require('../model/account.model');
const Profile = require('../model/profile.model'); // Import the Profile model
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

// @desc Get all accounts
// @route GET /getAllAccounts
// @access Private
const getAllAccounts = asyncHandler(async (req, res) => {
    Account
        .find()
        .select('-accPassword')
        .then(accounts => {
            return res.status(200).send(accounts)
        })
        .catch(error => {
            console.log(error);
        })
})

const createNewAccount = asyncHandler(async (req, res) => {
    const { accName, accEmail, accPassword } = req.body;

    try {
        // Check for duplicate username
        const duplicate = await Account.findOne({ accName }).lean().exec();

        if (duplicate) {
            return res.status(409).json({ message: 'Duplicate username' });
        }

        // Hash password
        const hashedPwd = await bcrypt.hash(accPassword, 10); // salt rounds
        const accountObject = { accName, accEmail, "accPassword": hashedPwd };

        // Create and store new account
        const account = await Account.create(accountObject);

        // If account is created
        if (account) {
            // Create new user profile
            await Profile.create({ "accID": account._id, "profName": accName }); // Use 'await' here

            return res.status(201).json({ message: `New account ${accName} created` });
        } else {
            res.status(400).json({ message: 'Invalid account data received' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating account' });
    }
});

// Log in user and create a session
const loginAccount = asyncHandler(async (req, res) => {
    const { accName, accPassword } = req.body;

    try {
        // Find the account by username
        const account = await Account.findOne({ accName }).exec();

        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }

        // Check password
        const passwordMatch = await bcrypt.compare(accPassword, account.accPassword);

        if (passwordMatch) {
            // Create a session for the user
            req.session.userId = account._id;

            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error during login' });
    }
});

module.exports = {
    createNewAccount,
    getAllAccounts,
    loginAccount 
};
