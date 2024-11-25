const fs = require('fs');
const path = require('path');

// Create public/images directory if it doesn't exist
if (!fs.existsSync('./public/images')) {
    fs.mkdirSync('./public/images', { recursive: true });
}

// Move the file
fs.copyFileSync(
    path.join(__dirname, 'images', 'hand-cash.jpg'),
    path.join(__dirname, 'public', 'images', 'hand-cash.jpg')
);
