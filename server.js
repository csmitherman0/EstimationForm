const express = require('express');
const path = require('path');
const estimate = require('./estimate/estimate');

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true })); // Body-parsing middleware. The request body is undefined by default.
app.use(express.static(path.join(__dirname, 'public'))); // For static assets
app.use(express.urlencoded({ extended: true })); // Body-parsing middleware. The request body is undefined by default.


/*****************
 * 
 * BEGIN EXPRESS ROUTES
 * 
 *****************/

app.get('/', (req, res) => {
    res.sendFile('form.html', { root: __dirname });
});

app.get('/forms/new', (req, res) => {
    res.sendFile('forms/new.html', { root: __dirname });
})

app.post('/', (req, res) => {
    console.log(req.body);
    const total = estimate(req.body);
    console.log(total);
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
