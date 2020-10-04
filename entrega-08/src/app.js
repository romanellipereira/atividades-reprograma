const express = require('express');
const app = express();
const index = require('./routes/index')
const musicas = require('./routes/womenMusicsRoutes');
const cors = require("cors");

app.use(express.static('public'));
app.use('/', index);
app.use('/', musicas);

app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
});

module.exports = app;