const express = require('express');
const dotenv = require('dotenv');
const app = express()
const PORT = 5003;
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);

app.get('/api', (req, res) => res.send('The Payvice Backend'))
app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`))