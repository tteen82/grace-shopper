import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Product from './Product';
import { setProducts, singleProduct } from '../store';

class Products extends React.Component {
  componentDidMount() {
    this.props.setProducts();
  }

  render() {
    let { allProducts } = this.props.products;
    // console.log('this.props: ', allProducts[0]);
    allProducts = allProducts || [];
    return (
      <div id="products">
        {allProducts.map((product) => (
          <div id="product" key={product.id}>
            <div>
              <Link
                onClick={() => singleProduct(product.id)}
                to={`/products/${product.id}`}
                key={product.id}
              >
                <h1>{product.name}</h1>
              </Link>
              <p>Price: {product.price}</p>
              {/* <img src={product.imageUrl} /> */}
              <p>Description: {product.details}</p>
            </div>
          </div>
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
