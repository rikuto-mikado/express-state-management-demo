const express = require('express');
const router = express.Router();

router.get('/basic', (req, res) => {
    console.log('--- Inside of req.query ---');
    console.log(req.query);

    const keyword = req.query.keyword;
    res.send(`Searching for: ${keyword}`);
});

router.get('/basic/users/:id', (req, res) => {
    console.log('--- Inside of req.params ---');
    console.log(req.params);

    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

module.exports = router;