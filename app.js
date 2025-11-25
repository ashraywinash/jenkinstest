const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Jenkins Pipeline Test App!');
});



module.exports = app; // Export for testing
