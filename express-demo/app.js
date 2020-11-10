const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send('Welcome to the API...')
});

// Route Parameters
app.get('/api/courses/:id', (req, res) => {
    res.send(`Course #${req.params.id} description...`);
});

// Multiple Routes Parameters
app.get('/api/users/:first/:last', (req, res) => {
    res.send(`Hola ${req.params.first} ${req.params.last}`);

    // Query String Parameter
    res.send(req.query);
});



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));