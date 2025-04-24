
const express = require('express');
const cors = require('cors');
require('dotenv').config(); 

const app = express();


app.use(cors());

app.use(express.json());

app.use(express.static('public'));


const userRoutes = require('./server/routes/user');
const noteRoutes = require('./server/routes/note');

app.use('/user', userRoutes);

app.use('/note', noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
