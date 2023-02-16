const express = require('express');
const app = express.Router();
const { User, Order } = require('../db');

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
      await User.findByToken(req.headers.authorization, { include: [Order] })
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

//updating a user
app.put('/:id', async (req, res, next) => {
  try {
    await User.update(req.body, { where: { id: req.params.id } });
    res.send(await User.findByPk(req.params.id, { include: [Orders] }));
  } catch (error) {
    console.log('Could not update the user ', error);
    next(error);
  }
});
