const express = require('express');
const router = express.Router();

router.post('/session/login', (req, res) => {
    req.session.inLoggedIn = true;

    console.log('--- Loggin in with Session... ---');
    console.log('req.session.isLoggedIn:', req.session.isLoggedIn);

    res.redirect('/session/profile');
});

