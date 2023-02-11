const express = require('express');
const app = express.Router();
const { Review } = require('../db');

module.exports = app;

app.get('/:id', async (req, res, next) => {
  try {
    console.log(req.params.id);
    const reviews = await Review.findAll({
      where: { productId: req.params.id },
    });
    res.send(reviews);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error getting reviews', error: err.message });
  }
});

//to add one review
app.post('/:productId/:userId', async (req, res, next) => {
  try {
    const data = {
      ...req.body,
      productId: req.params.productId,
      userId: req.params.userId,
    };
    const newReview = await Review.create(data);
    res.send(newReview);
  } catch (err) {
    res.status(500).json({
      message: 'Error adding the specific Review',
      error: err.message,
    });
  }
});
