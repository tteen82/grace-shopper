import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = (props) => {
    const { products } = props;

    return (
        <div id='products'>
            {products.map((product) => (
                <Link to={`/${product.id}`} key={product.id}>
                    <Product product={product} />
                </Link>                    
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      products: state.products,
    };
  };
  
  export default connect(mapStateToProps)(Products);