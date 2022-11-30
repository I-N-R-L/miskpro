const express = require('express')
const PORT = process.env.PORT || 8080;
var app = express();

var main = require('./client');

app.use('/', main);

app.listen(PORT, () => {
    console.log(`Server Run on port ${PORT}`)
});
