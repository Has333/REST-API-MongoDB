const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', (err) => {
    if (!err) console.log('Database connected');
    else console.log('Database connection failed');
});

module.exports = mongoose;