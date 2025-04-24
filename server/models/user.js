const db = require('./db_connect');


function fetchUsers(callback) {
    db.query('SELECT * FROM USER', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
}

function addUser(userData, callback) {
    const { FullName, FirstName, LastName, Email, Password } = userData;
    const sql = `
        INSERT INTO USER (FullName, FirstName, LastName, Email, Password)
        VALUES (?, ?, ?, ?, ?)
    `;
    const values = [FullName, FirstName, LastName, Email, Password];
    db.query(sql, values, (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
}

module.exports = {
    fetchUsers,
    addUser
};
