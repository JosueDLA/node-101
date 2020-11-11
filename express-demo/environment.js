const morgan = require('morgan')
const express = require('express');

const app = express();

// Only used in development environment
// NODE_ENV:= 'development'
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...')
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));