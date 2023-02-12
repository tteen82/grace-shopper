const express = require('express');
const app = express.Router();
const { Review, User } = require('../db');

module.exports = app;

app.get('/:id', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: { productId: req.params.id },
      include: [User],
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
    const newEntry = await Review.create(data);
    const newReview = await Review.findByPk(newEntry.id, {
      include: [User],
    });
    res.send(newReview);
  } catch (err) {
    res.status(500).json({
      message: 'Error adding the specific Review',
      error: err.message,
    });
  }
});
