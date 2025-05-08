const db = require('./db_connect');

const createNote = (user_id, title, content, callback) => {
  const sql = 'INSERT INTO NOTE (Title, Content, USERID) VALUES (?, ?, ?)';
  db.query(sql, [title, content, user_id], callback);
};

module.exports = { createNote };
