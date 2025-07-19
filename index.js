const express = require('express');
const ip = require('ip');

const app = express();

// Route for /ping
app.get('/ping', (req, res) => {
    return res.json({
        message: 'Hello, World from /ping!'
    });
});

// New route for the root path (/)
app.get('/', (req, res) => {
    return res.json({
        message: 'Hello, World from root!' ,// Or whatever message you want
        serverAddress: ip.address()
    });
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});