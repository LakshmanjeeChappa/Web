const express = require('express');
const router = express.Router();
const noteModel = require('../models/note');

router.get('/', (req, res) => {
    noteModel.getAllNotes((err, notes) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(notes);
    });
});

router.post('/', (req, res) => {
    noteModel.createNote(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Note created successfully', id: result.insertId });
    });
});

module.exports = router;

