const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        // Send a message
        console.log(message);

        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://example.com/profile' });
    }
}

module.exports = Logger;