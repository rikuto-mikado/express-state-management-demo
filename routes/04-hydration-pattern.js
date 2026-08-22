const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/hydration/login', async (req, res) => {
    const user = await User.findOne();

    if (user) {
        req.session.user = { _id: user._id };
    }
    res.redirect('/hydration/profile');
});

