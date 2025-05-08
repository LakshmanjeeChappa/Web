const db = require('./db_connect');
const createUser = (firstName, lastName, email, password, callback) => {
  const sql = 'INSERT INTO USER (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, email, password], callback);
};
const getUserByEmail = (email, callback) => {
  const sql = 'SELECT * FROM USER WHERE Email = ?';
  db.query(sql, [email], callback);
};
module.exports = {
  createUser,
  getUserByEmail
};

