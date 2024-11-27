const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Basic request logging
app.use((req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next();
});

// Import routes
const routes = require('./routes/index');
app.use('/', routes);

// Error handling for 404s
app.use((req, res) => {
    console.log(`404: ${req.path}`);
    res.status(404).send('Page not found');
});

// Error handling for other errors
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).send('Server error');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log('=================================');
    console.log('Server started on port', PORT);
    console.log('Server is running at http://localhost:' + PORT);
    console.log('=================================');
});
