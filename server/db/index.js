const conn = require('./conn');
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const LineItem = require('./LineItem');
const Review = require('./Review');

Order.belongsTo(User);
User.hasMany(Order);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product);
Review.belongsTo(User);
Review.hasMany(User);
Review.belongsTo(Product);
Product.hasMany(Review);

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [
    tiffany,
    wonjun,
    samuel,
    doug,
    a7rm5,
    a7m4,
    a7sm3,
    a7m3,
    a7m2,
    sel2470,
    sel70200,
    sel1635,
    sel24105,
    sel14,
  ] = await Promise.all([
    User.create({ username: 'tiffany', password: '123', isAdmin: true }),
    User.create({ username: 'wonjun', password: '123' }),
    User.create({ username: 'samuel', password: '123' }),
    User.create({ username: 'doug', password: '123' }),
    Product.create({
      name: 'Sony a7R V',
      price: 3900,
      imageUrl: 'a7rm5.jpg',
      details:
        'Combining resolution and precision, the Sony a7R V is the mirrorless camera designed for those who crave detail.',
    }),
    Product.create({
      name: 'Sony a7 IV',
      price: 2500,
      imageUrl: 'a7m4.jpg',
      details:
        'An all-arounder that pushes beyond basic, the Sony a7 IV does double duty with strong stills and video performance',
    }),
    Product.create({
      name: 'Sony a7S III',
      price: 3500,
      imageUrl: 'a7sm3.jpg',
      details:
        'Optimized video, optimized sensitivity, optimized speed, the Sony a7S III raises the bar for what a full-frame mirrorless camera is capable of.',
    }),
    Product.create({
      name: 'Sony a7 III',
      price: 2000,
      imageUrl: 'a7m3.jpg',
      details:
        'Distinguished by its updated sensor design, the Sony a7 III is a well-rounded camera suitable for both photo and video applications in a variety of working situations.',
    }),
    Product.create({
      name: 'Sony a7 II',
      price: 1000,
      imageUrl: 'a7m2.jpg',
      details:
        'Sony has taken their line of full-frame cameras to the next level with the a7 II Mirrorless Camera, which features 5-axis SteadyShot INSIDE image stabilization with 4.5 stops of compensation',
    }),
    Product.create({
      name: 'Sony FE 24-70mm f/2.8 GM II Lens ',
      price: 2300,
      imageUrl: 'sel2470.jpg',
      details:
        'A refined take on the fast standard zoom, the Sony FE 24-70mm f/2.8 GM II is not only smaller and lighter than the previous generation.',
    }),
    Product.create({
      name: 'Sony FE 70-200mm f/2.8 GM OSS II Lens',
      price: 2800,
      imageUrl: 'sel70200.jpg',
      details:
        'Sony FE 70-200mm f/2.8 GM OSS II takes the classic fast zoom and elevates performance to a whole new level.',
    }),
    Product.create({
      name: 'Sony FE 16-35mm f/2.8 GM Lens',
      price: 2200,
      imageUrl: 'sel1635.jpg',
      details:
        'Offering G Master performance in a compact, fast, and versatile form, the Sony FE 16-35mm f/2.8 GM is a wide-angle zoom covering ultra-wide to standard wide-angle fields of view.',
    }),
    Product.create({
      name: 'Sony FE 24-105mm f/4 G OSS Lens',
      price: 2300,
      imageUrl: 'sel24105.jpg',
      details:
        'Designed for versatility, the FE 24-105mm f/4 G OSS Lens from Sony is a wide-angle to short-telephoto zoom designed to be an ideal one-lens solution for everyday shooting.',
    }),
    Product.create({
      name: 'Sony FE 14mm f/1.8 GM Lens',
      price: 1600,
      imageUrl: 'sel14.jpg',
      details:
        'Pairing an ultra wide-angle focal length with an especially bright design, the FE 14mm f/1.8 GM from Sony is a fast and dynamic lens well-suited to landscape, nature, architectural, and astrophotography applications.',
    }),
  ]);

  const cart = await doug.getCart();
  await doug.addToCart({ product: a7m3, quantity: 2 });
  await doug.addToCart({ product: sel70200, quantity: 1 });
  Review.create({
    comment: 'I hate this product.  It is stupid.',
    stars: 1,
    productId: a7rm5.id,
    userId: wonjun.id,
  }),
    Review.create({
      comment: 'Best camera ever!',
      stars: 5,
      productId: sel2470.id,
      userId: doug.id,
    });
  return {
    users: {
      tiffany,
      wonjun,
      samuel,
      doug,
    },
    products: {
      a7rm5,
      a7m4,
      a7sm3,
      a7m3,
      a7m2,
      sel2470,
      sel70200,
      sel1635,
      sel24105,
      sel14,
    },
  };
};

module.exports = {
  syncAndSeed,
  User,
  Product,
  Review,
  Order,
};
