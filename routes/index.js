const express = require('express');
const router = express.Router();
const path = require('path');

// Home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Cos'è Taxcoin
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'));
});

// Utenti
router.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/users.html'));
});

// Aziende
router.get('/companies', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/companies.html'));
});

// Start Mining Taxcoin
router.get('/start-mining', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/start-mining.html'));
});

// Contact form for companies
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contact.html'));
});

module.exports = router;
