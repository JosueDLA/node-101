const http = require('http');

// This server is an EventEmitter
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    // Handle different route
    if (req.url === '/api/courses') {
        res.write('Welcome to the API');
        res.end();
    }
});

// On Connection Event Listener
server.on('connection', socket => {
    console.log('New Connection...');
});

server.listen(3000);

console.log('Listening on port 3000...');