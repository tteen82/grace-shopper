const express = require('express');
const app = express.Router();
const { User, Order } = require('../db');

module.exports = app;

app.post('/', async (req, res, next) => {
  try {
    const { token } = req.body;
    const user = await User.findByToken(token);
    res.send(await user.createOrder());
  } catch (ex) {
    next(ex);
  }
});

app.get('/cart', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(await user.getCart());
  } catch (ex) {
    next(ex);
  }
});
app.get('/order/', async (req, res, next) => {
  try {
    // const { user } = req.body;
    // console.log('thissss isss userrrr', user);
    const user = await User.findByToken(req.headers.authorization);
    const orders = await Order.findAll({
      where: { userId: user.id },
      include: User,
    });
    //const orders = await Order.findAll();
    res.send(orders);
  } catch (ex) {
    next(ex);
  }
});

app.post('/cart', async (req, res, next) => {
  try {
    const { token, product } = req.body;
    const user = await User.findByToken(token);
    res.send(await user.addToCart({ product, quantity: 1 }));
  } catch (ex) {
    next(ex);
  }
});

app.put('/cart', async (req, res, next) => {
  try {
    const { token, id } = req.body;
    const user = await User.findByToken(token);
    res.send(await user.removeFromCart({ id, quantityToRemove: 1 }));
  } catch (ex) {
    next(ex);
  }
});
