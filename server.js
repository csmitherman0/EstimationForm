const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true })); // Body-parsing middleware. The request body is undefined by default.
app.use(express.static(path.join(__dirname, 'public'))); // For static assets


/*****************
 * 
 * BEGIN EXPRESS ROUTES
 * 
 */

app.get('/', (req, res) => {
    res.sendFile('form.html', { root: __dirname });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});