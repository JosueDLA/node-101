const Joi = require('joi');
const config = require('config')
const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', (req, res) => {
    res.render('index', { title: 'My App', message: 'Hello World' })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));