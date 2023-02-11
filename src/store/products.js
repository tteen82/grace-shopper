import axios from 'axios';
const products = (state = { allProducts: [], singleProduct: {} }, action) => {
  if (action.type === 'SET_PRODUCTS') {
    return { ...state, allProducts: action.products };
  }
  if (action.type === 'SINGLE_PRODUCT') {
    return { ...state, singleProduct: action.product };
  }
  if (action.type === 'CREATE_PRODUCT') {
    return { ...state, allProducts: [...state.allProducts, action.product] };
  }
  if (action.type === 'ADD_REVIEW') {
    return {
      ...state,
      allProducts: state.allProducts.map((product) =>
        product.id === action.product.id ? action.product : product
      ),
      singleProduct: action.product,
    };
  }
  return state;
};

export const setProducts = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/products/');
    dispatch({ type: 'SET_PRODUCTS', products: response.data });
  };
};

export const singleProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      dispatch({ type: 'SINGLE_PRODUCT', product: response.data });
    } catch (error) {
      console.log('could not get th e product error is -->', error);
    }
  };
};

export const createProduct = (data) => {
  return async (dispatch) => {
    const response = await axios.post('/api/products/admin', data);
    dispatch({ type: 'CREATE_PRODUCT', product: response.data });
  };
};

export const addingReview = (id, data) => {
  return async (dispatch) => {
    const response = await axios.post(`/api/products/${id}`, data);
    dispatch({ type: 'ADD_REVIEW', product: response.data });
  };
};
export default products;
