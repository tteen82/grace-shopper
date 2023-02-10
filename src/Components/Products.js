import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Product from './Product';
import { setProducts } from '../store';

class Products extends React.Component {
  componentDidMount() {
    this.props.setProducts();
  }

  render() {
    let { allProducts } = this.props.products;
    console.log('this.props: ', allProducts[0]);
    allProducts = allProducts || [];
    return (
      <div id="products">
        {allProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Product product={product} />
          </Link>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setProducts: () => {
    dispatch(setProducts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
