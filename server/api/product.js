const express = require('express');
const app = express.Router();
const { Product, Review } = require('../db');

module.exports = app;

//To get all the products
app.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.send(allProducts);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error getting all the products', error: err.message });
  }
});

//to add one single product
app.post('/admin', async (req, res, next) => {
  try {
    const singleProduct = await Product.create(req.body);
    res.send(singleProduct);
  } catch (err) {
    res.status(500).json({
      message: 'Error getting the specific product requested',
      error: err.message,
    });
  }
});

//get all the info for one single product
app.get('/:id', async (req, res, next) => {
  try {
    //uncomment the next line when the review model has been added and created
    const singleProduct = await Product.findByPk(req.params.id, {
      include: [Reviews],
    });
    res.send(singleProduct);
  } catch (err) {
    res.status(500).json({
      message: 'Error getting the info for the specific product',
      error: err.message,
    });
  }
});
