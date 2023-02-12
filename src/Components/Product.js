import React from 'react';
import { connect } from 'react-redux';

//uncomment below when you want to use hooks instead
//import React, { useEffect, useState } from 'react';

import ReviewForm from './ReviewForm';
import { singleProduct } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

class Product extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.singleProduct(this.props.match.params.id);
  }
  render() {
    const { id, name, price, imageUrl, details } =
      this.props.products.singleProduct;
    return (
      <div id="singleProduct">
        <h1>{name}</h1>
        <p>Price: ${price}</p>
        <img src={imageUrl} className="singleImage" />
        <p>Description: {details}</p>
        <ReviewForm id={this.props.match.params.id} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    singleProduct: (id) => {
      dispatch(singleProduct(id));
    },
  };
};

//This version below is the same but using hooks instead of props

// const Product = (props) => {
//   const { products } = useSelector((state) => state);

//   const product = products.singleProduct;

//   const params = useParams();

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(singleProduct(params.id));
//   }, []);

//   return (
//     <div id="product">
//       <div>
//         <h1>{product.name}</h1>
//         <p>Price: {product.price}</p>
//         <img src={product.imageUrl} />
//         <p>Description: {product.details}</p>
//       </div>
//       {/* <ReviewForm product={props.product} /> */}
//     </div>
//   );

// };

export default connect((state) => state, mapDispatchToProps)(Product);
