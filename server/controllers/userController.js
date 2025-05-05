const userModel = require('../models/user');
const db = require('../db_connect');

const registerUser = (req, res) => {
  userModel.createUser(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'User registered', userId: result.insertId });
  });
};

const getUser = (req, res) => {
  userModel.getUserById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

const updateUser = (req, res) => {
  userModel.updateUser(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'User updated' });
  });
};

const deleteUser = (req, res) => {
  userModel.deleteUser(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'User deleted' });
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.promise().execute('SELECT * FROM USER WHERE email = ?', [email]);

    if (rows.length === 0 || rows[0].password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', id: rows[0].id });
  } catch (error) {
    res.status(500).json({ message: 'Login error', error: error.message });
  }
};

module.exports = {
  registerUser,
  getUser,
  updateUser,
  deleteUser,
  loginUser
};

