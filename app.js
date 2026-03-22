const express = require('express');
const serverless = require('serverless-http'); // Yeh line add karein
const path = require('path'); // Path module zaroori hai
const app = express();

const friends = require('./data/friends.json');
const groupPhotos = require('./data/group.json');

// EJS aur Views setup (Vercel ke liye ye path zaroori hai)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

// Static files (CSS/Images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page', message: 'Welcome to my Project!', username: 'Arun' });
});

app.get('/home2', (req, res) => {
    res.render('home2', { friends });
});

app.get('/gallery', (req, res) => {
    res.render('gallery', { groupPhotos });
});

// Production (Vercel) ke liye export, local ke liye listen
if (process.env.NODE_ENV === 'production') {
    module.exports = app;
    module.exports.handler = serverless(app);
} else {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}