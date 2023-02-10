import React from 'react';
import ReviewForm from './ReviewForm';

const Product = (props) => {
  const { name, price, imageUrl, details } = props.product;
  console.log('thisi is props: ', props);
  return (
    <div id="product">
      <div>
        <h1>{name}</h1>
        <p>Price: {price}</p>
        <img src={imageUrl} />
        <p>Description: {details}</p>
      </div>
      <ReviewForm product={props.product} />
    </div>
  );
};

export default Product;
