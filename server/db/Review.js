const conn = require('./conn');
const { TEXT, INTEGER, UUID, UUIDV4, STRING } = conn.Sequelize;

const Review = conn.define('review', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  comment: {
    type: TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  stars: {
    type: STRING,
  },
});

module.exports = Review;
