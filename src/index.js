const express = require('express');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

require('./controllers/authController')(app);

app.get('/', (req, res) => 
res.send('Server working'));

app.listen(5500);