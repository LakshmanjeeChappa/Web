const express = require('express');
const router = express.Router();
const userModel = require('../models/user');

// Get all users
router.get('/', (req, res) => {
    userModel.getAllUsers((err, users) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(users);
    });
});

// Create a new user
router.post('/', (req, res) => {
    userModel.createUser(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'User created successfully', id: result.insertId });
    });
});

// Update a user
router.put('/:id', (req, res) => {
    const userId = req.params.id;
    userModel.updateUser(userId, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User updated successfully' });
    });
});

// Delete a user
router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    userModel.deleteUser(userId, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User deleted successfully' });
    });
});

module.exports = router;
