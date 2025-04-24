const express = require('express');
const router = express.Router();
const userModel = require('../models/user');

router.get('/', (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(users);
  });
});

router.post('/', (req, res) => {
  userModel.createUser(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'User created!', id: result.insertId });
  });
});

module.exports = router;
