const mongoose = require('mongoose');
// require('dotenv').config();

mongoose.connect('mongodb://localhost/portfolio', {
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;