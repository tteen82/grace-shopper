const conn = require('./conn');
const { STRING, INTEGER, TEXT, UUID, UUIDV4 } = conn.Sequelize;

const Product = conn.define('product', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: STRING,
    allowNull: true
  },
  price: {
    type: INTEGER,
    allowNull: false
  },
  details: {
    type: TEXT,
    allowNull: false
  },
});

module.exports = Product;
