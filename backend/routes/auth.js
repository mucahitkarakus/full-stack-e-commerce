const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');



// Register
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ err: 'User already exists' });

        const newUser = await new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(200).json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Server Error' });
    }
});

module.exports = router;