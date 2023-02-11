import React, { useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';
import { singleProduct } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Product = (props) => {
  const { products } = useSelector((state) => state);

  const product = products.singleProduct;

  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleProduct(params.id));
  }, []);

  return (
    <div id="product">
      <div>
        <h1>{product.name}</h1>
        <p>Price: {product.price}</p>
        <img src={product.imageUrl} />
        <p>Description: {product.details}</p>
      </div>
      {/* <ReviewForm product={props.product} /> */}
    </div>
  );
};

export default Product;
