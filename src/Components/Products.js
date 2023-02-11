import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCards';
import { setProducts, addToCart } from '../store';

class Products extends React.Component {
  componentDidMount() {
    this.props.setProducts();
  }

  render() {
    const { addToCart } = this.props;
    let { allProducts } = this.props.products;
    allProducts = allProducts || [];
    return (
      <div id="products">
        {allProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setProducts: () => {
    dispatch(setProducts());
  },
  addToCart: (product, quantity) => {
    dispatch(addToCart(product, quantity));
  },
});

export default connect((state) => state, mapDispatchToProps)(Products);
