import React, { useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';
import { singleProduct } from '../store';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Product = (props) => {
  const { products } = useSelector((state) => state);
  const product = products.singleProduct;
  console.log('herssss productsss,', product);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleProduct(params.id));
  }, []);

  return (
    <div id="product">
      <div>
        <div>hellooooo</div>
        <h1>{product.name}</h1>
        {/* <p>Price: {price}</p>
        <img src={imageUrl} />
        <p>Description: {details}</p> */}
      </div>
      {/* <ReviewForm product={props.product} /> */}
    </div>
  );
};

// const mapStateToProps = ({ products }, { match }) => {
//   console.log('heree is productss -->>', products);
//   const product = products.find(
//     (product) => product.id === match.params.id * 1
//   );
//   return { product };
// };

// const mapDispatchToProps = (dispatch) => (
//   console.log(dispatch),
//   {
//     singleProduct: () => {
//       dispatch(singleProduct(allProducts[0].id));
//     },
//   }
// );

export default Product;
