const express = require('express');
const app = express();
const userRoutes = require('./server/routes/user');
const noteRoutes = require('./server/routes/note');
require('dotenv').config();

app.use(express.json());
app.use(express.static('public'));
app.use('/api', userRoutes);
app.use('/api', noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
