require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));

const basicRoutes = require('./routes/01-basic');
app.use(basicRoutes);

const statelessRoutes = require('./routes/02-stateless-demo');
app.use(statelessRoutes);

const sessionRoutes = require('./routes/03-session-basics');
app.use(sessionRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});