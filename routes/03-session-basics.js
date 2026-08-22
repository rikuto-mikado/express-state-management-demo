const express = require('express');
const router = express.Router();

router.post('/session/login', (req, res) => {
    req.session.inLoggedIn = true;

    console.log('--- Loggin in with Session... ---');
    console.log('req.session.isLoggedIn:', req.session.isLoggedIn);

    res.redirect('/session/profile');
});

router.get('/session/profile', (req, res) => {
    console.log('--- Showing session profile screen. ---');
    console.log('req.sessiono.isLoggedIn:', req.session.isLoggedIn);

    if (req.session.isLoggedIn) {
        res.send(`
            <p>Login status maintained successfully with Session!</p>
            <form action="/session/logout" method="POST">
                <button type="submit">Logout</button>
            </form>
        `);
    } else {
        res.send(`
            <p>You are not logged in.</p>
            <form action="/session/login" method="POST">
                <button type="submit">Login with Session</button>
            </form>
        `);
    }
});

router.post('/session/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/session/profile');
    });
});

module.exports = router;
