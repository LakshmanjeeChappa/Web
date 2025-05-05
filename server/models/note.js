const db = require('../db_connect');

const createNote = (note, callback) => {
  const { title, content, user_id, section_id } = note;
  db.query(
    'INSERT INTO notes (title, content, user_id, section_id) VALUES (?, ?, ?, ?)',
    [title, content, user_id, section_id],
    callback
  );
};

const getNoteById = (id, callback) => {
  db.query('SELECT * FROM notes WHERE id = ?', [id], callback);
};

const getAllNotesByUser = (user_id, callback) => {
  db.query('SELECT * FROM notes WHERE user_id = ?', [user_id], callback);
};

const updateNote = (id, note, callback) => {
  const { title, content } = note;
  db.query(
    'UPDATE notes SET title = ?, content = ? WHERE id = ?',
    [title, content, id],
    callback
  );
};

const deleteNote = (id, callback) => {
  db.query('DELETE FROM notes WHERE id = ?', [id], callback);
};

module.exports = {
  createNote,
  getNoteById,
  getAllNotesByUser,
  updateNote,
  deleteNote,
};
