const express = require('express');
const router = express.Router();
const { createNote } = require('../models/note');
const db = require('../models/db_connect');

router.post('/notes', (req, res) => {
  const { user_id, title, content } = req.body;

  if (!user_id || !content) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  createNote(user_id, title || 'Untitled', content, (err, result) => {
    if (err) {
      console.error('🔥 MySQL ERROR while saving note:', err.sqlMessage || err.message || err);
      return res.status(500).json({ message: 'Failed to create note' });
    }
    res.status(200).json({ message: 'Note saved successfully' });
  });
});
router.get('/notes/:userId', (req, res) => {
  const userId = req.params.userId;
  const sql = 'SELECT * FROM NOTE WHERE USERID = ?';

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error('🔥 MySQL error while fetching notes:', err);
      return res.status(500).json({ message: 'Failed to fetch notes' });
    }
    res.status(200).json(results);
  });
});

router.put('/notes/:noteId', (req, res) => {
  const noteId = req.params.noteId;
  const { title, content } = req.body;

  const sql = 'UPDATE NOTE SET Title = ?, Content = ? WHERE NOTEID = ?';
  db.query(sql, [title, content, noteId], (err, result) => {
    if (err) {
      console.error('🔥 MySQL error updating note:', err);
      return res.status(500).json({ message: 'Failed to update note' });
    }
    res.status(200).json({ message: 'Note updated' });
  });
});
router.delete('/notes/:noteId', (req, res) => {
  const noteId = req.params.noteId;

  db.query('DELETE FROM NOTE WHERE NOTEID = ?', [noteId], (err, result) => {
    if (err) {
      console.error('🔥 MySQL error deleting note:', err);
      return res.status(500).json({ message: 'Failed to delete note' });
    }
    res.status(200).json({ message: 'Note deleted' });
  });
});

module.exports = router;
