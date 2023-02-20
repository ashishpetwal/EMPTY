const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Route 1: To Signup a new User to the database

router.post('/signup', [
    body('email', "Enter a valid email").isEmail()
],
    async (req, res) => {

        let success = false;

        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ success, error: "enter a valid email" })
            }

            let user = await User.findOne({ email: req.body.email });

            if (user) {
                return res.status(400).json({ success, error: "User already registered" })
            }

            let salt = await bcrypt.genSalt(10);
            let secPassKey = await bcrypt.hash(req.body.password, salt);

            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassKey
            })

            const data = {
                user: {
                    id: user.id
                }
            }

            const secToken = jwt.sign(data, process.env.JWT_SECRET);
            success = true;
            res.json({ success, secToken });

        } catch (error) {
            return res.status(500).json({ success, error: 'Internal Server error' })
        }
    }
)

// Route 2: Authenticate Login Request of the User

router.post('/login', [
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Password Cannot be Blank").exists(),
], async (req, res) => {
    let success = false;
    // return errors on Invalid Request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body; //extracts email and password from request
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success, error: "Enter Valid Credentials" });
        }

        const comparePass = await bcrypt.compare(password, user.password);

        if (!comparePass) {
            return res.status(400).json({ success, error: "Enter Valid Credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const secToken = jwt.sign(data, process.env.JWT_SECRET);
        success = true;
        res.json({ success, secToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;