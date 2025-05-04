const db = require('./db_connect');

// Get all notes
function getAllNotes(callback) {
    db.query('SELECT * FROM NOTE', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
}

// Create a new note
function createNote(note, callback) {
    const { Title, Content, USERID, SECTIONID } = note;
    db.query(
        'INSERT INTO NOTE (Title, Content, USERID, SECTIONID) VALUES (?, ?, ?, ?)',
        [Title, Content, USERID, SECTIONID],
        (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        }
    );
}

// Update a note
function updateNote(id, updatedNote, callback) {
    const { Title, Content } = updatedNote;
    db.query(
        'UPDATE NOTE SET Title = ?, Content = ? WHERE NOTEID = ?',
        [Title, Content, id],
        (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        }
    );
}

// Delete a note
function deleteNote(id, callback) {
    db.query('DELETE FROM NOTE WHERE NOTEID = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
}

module.exports = { getAllNotes, createNote, updateNote, deleteNote };



