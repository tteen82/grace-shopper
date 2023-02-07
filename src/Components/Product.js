import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
//import product function


class Product extends React.Component {
    componentDidMount() {
        //this.props.PRODUCT FUNCTION(this.props.match.params.id)
    }

    render() {
        const { product } = this.props;
        const { id, name, imageUrl, price, details } = product;
        return (
            <div id='product'>
                <div>
                  <h1>
                    { name }
                  </h1>
                  <img src={imageUrl} />
                  <p>Price: {price}</p>
                  <p>Description: {details}</p>
                </div>
                <ReviewForm product={product} />
            </div>
        )
    }
}

const mapStateToProps = ({ products }) => {
    return {
      product: products.products,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      //PRODUCT FUNCTION: (id) => dispatch(PRODUCT FUNCTION(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Product);