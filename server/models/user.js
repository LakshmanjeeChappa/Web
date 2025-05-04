const db = require('./db_connect');

// Get all users
function getAllUsers(callback) {
    db.query('SELECT * FROM USER', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
}

// Create a new user
function createUser(user, callback) {
    const { FullName, FirstName, LastName, Email, Password } = user;
    db.query(
        'INSERT INTO USER (FullName, FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?, ?)',
        [FullName, FirstName, LastName, Email, Password],
        (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        }
    );
}

// Update an existing user
function updateUser(id, updatedUser, callback) {
    const { FullName, FirstName, LastName, Email } = updatedUser;
    db.query(
        'UPDATE USER SET FullName = ?, FirstName = ?, LastName = ?, Email = ? WHERE USERID = ?',
        [FullName, FirstName, LastName, Email, id],
        (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        }
    );
}

// Delete a user
function deleteUser(id, callback) {
    db.query('DELETE FROM USER WHERE USERID = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser };

