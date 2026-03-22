const express = require('express');
const app = express();


// module.exports = app;
// module.exports.handler = serverless(app);
// const serverless = require("serverless-http")

const friends = require('./data/friends.json');

app.set('view engine', 'ejs'); // EJS ko engine set karna
app.use(express.static('public')); // Static files ke liye


app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page', message: 'Welcome to my Project!' ,username : 'Arun'
    });
});

app.get('/home2', (req, res) => {
    res.render('home2',{friends});
    // res.render('home2', { title: 'Home Page', message: 'Welcome to my Project!' ,username : 'Arun', friends: friends
    // });
});
const groupPhotos = require('./data/group.json')
app.get('/gallery', (req, res) => {
    res.render('gallery', { groupPhotos });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));