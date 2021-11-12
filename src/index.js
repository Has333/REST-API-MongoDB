const express = require('express');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

require('./app/controllers/authController')(app);
require('./app/controllers/projectController')(app);

app.get('/', (req, res) => 
res.send('Server working'));

app.listen(5500);