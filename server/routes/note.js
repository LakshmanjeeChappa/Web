const express = require('express');
const router = express.Router();
const noteModel = require('../models/note');

// Get all notes
router.get('/', (req, res) => {
    noteModel.getAllNotes((err, notes) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(notes);
    });
});

// Create a new note
router.post('/', (req, res) => {
    noteModel.createNote(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Note created successfully', id: result.insertId });
    });
});

// Update a note
router.put('/:id', (req, res) => {
    const noteId = req.params.id;
    noteModel.updateNote(noteId, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Note updated successfully' });
    });
});

// Delete a note
router.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    noteModel.deleteNote(noteId, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Note deleted successfully' });
    });
});

module.exports = router;

