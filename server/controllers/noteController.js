const noteModel = require('../models/note');


// Create a new note
const createNote = (req, res) => {
  noteModel.createNote(req.body, (err, result) => {
    if (err) {
      console.error('Error creating note:', err);
      return res.status(500).json({ error: 'Database error while creating note' });
    }
    res.status(201).json({ message: 'Note created successfully', noteId: result.insertId });
  });
};

// Get a single note by its ID
const getNote = (req, res) => {
  const noteId = req.params.id;
  noteModel.getNoteById(noteId, (err, result) => {
    if (err) {
      console.error('Error fetching note:', err);
      return res.status(500).json({ error: 'Database error while fetching note' });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(result[0]);
  });
};

// Get all notes created by a specific user
const getAllNotesByUser = (req, res) => {
  const userId = req.params.user_id;
  noteModel.getAllNotesByUser(userId, (err, results) => {
    if (err) {
      console.error('Error fetching notes:', err);
      return res.status(500).json({ error: 'Database error while fetching notes' });
    }
    res.status(200).json(results);
  });
};

// Update a note by its ID
const updateNote = (req, res) => {
  const noteId = req.params.id;
  noteModel.updateNote(noteId, req.body, (err) => {
    if (err) {
      console.error('Error updating note:', err);
      return res.status(500).json({ error: 'Database error while updating note' });
    }
    res.status(200).json({ message: 'Note updated successfully' });
  });
};

// Delete a note by its ID
const deleteNote = (req, res) => {
  const noteId = req.params.id;
  noteModel.deleteNote(noteId, (err) => {
    if (err) {
      console.error('Error deleting note:', err);
      return res.status(500).json({ error: 'Database error while deleting note' });
    }
    res.status(200).json({ message: 'Note deleted successfully' });
  });
};

module.exports = {
  createNote,
  getNote,
  getAllNotesByUser,
  updateNote,
  deleteNote,
};
