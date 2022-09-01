const express = require('express');

const PORT = 3000;

const app = express();



/*****************
 * 
 * BEGIN EXPRESS ROUTES
 * 
 */

app.get('/', (req, res) => {
    res.sendFile('form/index.html')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});