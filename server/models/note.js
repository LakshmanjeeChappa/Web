const db = require('./db_connect');


function fetchNotes(callback) {
    db.query('SELECT * FROM NOTE', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
}


function addNote(noteData, callback) {
    const { Title, Content, USERID, SECTIONID } = noteData;
    const sql = `
        INSERT INTO NOTE (Title, Content, USERID, SECTIONID)
        VALUES (?, ?, ?, ?)
    `;
    const values = [Title, Content, USERID, SECTIONID];
    db.query(sql, values, (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
}

module.exports = {
    fetchNotes,
    addNote
};


