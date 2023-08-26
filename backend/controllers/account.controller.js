const Account = require('../model/account.model')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

const createNewAccount = asyncHandler(async (req, res) => {
    const { accName, accEmail, accPassword } = req.body

    // Check for duplicate username
    const duplicate = await Account.findOne({ accName }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    // Hash password 
    const hashedPwd = await bcrypt.hash(accPassword, 10) // salt rounds
    const accountObject = { accName, accEmail, "accPassword": hashedPwd }

    // Create and store new account 
    const account = await Account.create(accountObject)

    // If account is created
    if (account) {
        // Create new user profile
        UserInfo.create({"accID": account?._id, })

        return res.status(201).json({ message: `New account ${accName} created` })
    } else {
        res.status(400).json({ message: 'Invalid account data received' })
    }
})