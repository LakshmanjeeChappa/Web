const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./server/routes/user');
const noteRoutes = require('./server/routes/note');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/user', userRoutes);
app.use('/note', noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
