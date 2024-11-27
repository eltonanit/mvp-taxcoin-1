const express = require('express');
const router = express.Router();
const path = require('path');

// Middleware per gestire gli errori 404
const handle404 = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
};

// Middleware per verificare se il file esiste
const checkFileExists = (filePath) => {
    return (req, res, next) => {
        try {
            if (require('fs').existsSync(filePath)) {
                next();
            } else {
                handle404(req, res, next);
            }
        } catch (err) {
            next(err);
        }
    };
};

// Rotte principali
// Home page - Landing page principale
router.get('/', checkFileExists(path.join(__dirname, '../public/index.html')), (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// About - Pagina informativa su Taxcoin
router.get('/about', checkFileExists(path.join(__dirname, '../public/about.html')), (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'));
});

// Users - Sezione dedicata agli utenti
router.get('/users', checkFileExists(path.join(__dirname, '../public/users.html')), (req, res) => {
    res.sendFile(path.join(__dirname, '../public/users.html'));
});

// Companies - Sezione dedicata alle aziende
router.get('/companies', checkFileExists(path.join(__dirname, '../public/companies.html')), (req, res) => {
    res.sendFile(path.join(__dirname, '../public/companies.html'));
});

// Mining - Pagina per iniziare il mining di Taxcoin
router.get('/start-mining', checkFileExists(path.join(__dirname, '../public/start-mining.html')), (req, res) => {
    res.sendFile(path.join(__dirname, '../public/start-mining.html'));
});

// Contact - Form di contatto per le aziende
router.get('/contact', checkFileExists(path.join(__dirname, '../public/contact.html')), (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contact.html'));
});

// Gestione 404 per rotte non trovate
router.use(handle404);

// Gestione errori generici
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Qualcosa è andato storto! Riprova più tardi.');
});

module.exports = router;
