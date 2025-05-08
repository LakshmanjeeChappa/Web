const express = require('express');
const router = express.Router();
const { createUser, getUserByEmail } = require('../models/user');
router.post('/user/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  createUser(firstName, lastName, email, password, (err, result) => {
    if (err) {
      console.error(' MySQL error during registration:', err.sqlMessage || err.message || err);
      return res.status(500).json({ error: 'Error registering user' });
    }
    res.status(200).json({ userId: result.insertId });
  });
});


router.post('/users/login', (req, res) => {
  const { email, password } = req.body;

  getUserByEmail(email, (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = results[0];
    if (user.Password !== password) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    res.status(200).json({ id: user.USERID });
  });
});

module.exports = router;
  