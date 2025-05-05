const db = require('../db_connect');

const createUser = (user, callback) => {
  const { name, email, password } = user;
  db.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    callback
  );
};

const getUserById = (id, callback) => {
  db.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

const updateUser = (id, user, callback) => {
  const { name, email, password } = user;
  db.query(
    'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
    [name, email, password, id],
    callback
  );
};

const deleteUser = (id, callback) => {
  db.query('DELETE FROM users WHERE id = ?', [id], callback);
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
