import React from 'react';
import { connect } from 'react-redux';
import { singleProduct } from '../store';
import ReviewForm from './ReviewForm';

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

export default connect((state) => state, mapDispatchToProps)(Product);
