const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body
        const newUser = await new User({
            username,
            email,
            password
        });

        await newUser.save();

        res.status(200).json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Server Error' });
    }
});

module.exports = router;