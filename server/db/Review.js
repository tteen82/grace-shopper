const conn = require('./conn');
const { TEXT, INTEGER, UUID, UUIDV4 } = conn.Sequelize;

const Review = conn.define('review', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    description: {
      type: TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    stars: {
        type: INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    },
  });
  
  module.exports = Review;