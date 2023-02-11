const { INTEGER } = require('sequelize');
const conn = require('./conn');
const { STRING, BOOLEAN, UUID, UUIDV4 } = conn.Sequelize;

const Order = conn.define('order', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  isCart: {
    type: BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  userId: {
    type: UUID,
    allowNull: false,
  },
  // shippingAddress: {
  //   type: STRING,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true
  //   }
  // },
  // billingAddress: {
  //   type: STRING,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true
  //   }
  // },
  // ccNumber: {
  //   type: INTEGER,
  //   validate: {
  //     min: 16,
  //     max: 16,
  //     isCreditCard: true,
  //   }
  // },
});

module.exports = Order;
