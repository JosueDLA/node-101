const Joi = require('joi');
const config = require('config')
const express = require('express');

const app = express();

app.use(express.json());


// Dummy Data
const courses = [
    { id: 1, name: 'Course1' },
    { id: 2, name: 'Course2' },
    { id: 3, name: 'Course3' }
];

// Configuration
console.log('Application name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

function validateCourse(course) {
    // Course Schema
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    // Validate data with Joi
    const result = schema.validate(course);

    return result;
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses)
});

// Route Parameters
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    // Handling GET Requests
    // Return 404 response
    if (!course) {
        return res.status(404).send('Course not found')
    }

    res.send(course);
});

// Handling POST Requests
app.post('/api/courses', (req, res) => {

    // const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);

    if (error) {
        // Return 400 bad request
        return res.status(400).send(error.details[0].message);
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});

// Handling PUT Requests
app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    // Return 404 response
    if (!course) {
        return res.status(404).send('Course not found')
    }

    const { error } = validateCourse(req.body);

    if (error) {
        // Return 400 bad request
        return res.status(400).send(error.details[0].message);
    }

    // Update course
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    // Return 404 response
    if (!course) {
        return res.status(404).send('Course not found')
    }

    // Delete course
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

// Multiple Routes Parameters
app.get('/api/users/:first/:last', (req, res) => {
    res.send(`Hola ${req.params.first} ${req.params.last}`);

    // Query String Parameter
    res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));