const express = require('express');
const router = express.Router();

router.post('/stateless/login', (req, res) => {
    req.isLoggedIn = true;

    console.log('--- Logging in... ---');
    console.log('req.isLoggedIn:', req.isLoggedIn);

    res.redirect('/stateless/profile');
});

router.get('/stateless/profile', (req, res) => {
    console.log('--- Showing profile screen. ---');
    console.log('req.isLoggedIn:', req.isLoggedIn);

    if (req.isLoggedIn) {
        res.send('Login status maintained successfully');
    } else {
        res.send(`
              <p>Status has been reset</p>
              <from action="/stateless/login" method="POST">
                <button type="submit">Login</button>
              </from>
        `);
    }
});

module.exports = router;