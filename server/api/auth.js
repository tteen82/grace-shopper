const express = require('express');
const app = express.Router();
const { User } = require('../db');

module.exports = app;

//Authenticates the user
app.post('/', async (req, res, next) => {
  try {
    res.send(await User.authenticate(req.body));
  } catch (ex) {
    next(ex);
  }
});

//retrieves a single user
app.get('/', async (req, res, next) => {
  try {
    res.send(
      await User.findByToken(req.headers.authorization, { include: [orders] })
    );
  } catch (ex) {
    next(ex);
  }
});

//creates a new user
app.post('/register', async (req, res, next) => {
  try {
    res.send(await User.create(req.body));
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error creating the user', error: err.message });
  }
});
