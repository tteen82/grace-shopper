import React from 'react';
import ReviewForm from './ReviewForm';

const Product = (props) => {
  const { product } = this.props;
  const { name, price, imageUrl, details } = product;
  return (
    <div id="product">
      <div>
        <h1>{name}</h1>
        <p>Price: {price}</p>
        <img src={imageUrl} />
        <p>Description: {details}</p>
      </div>
      <ReviewForm product={product} />
    </div>
  );
};

export default Product;
