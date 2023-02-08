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
  return state;
};

export const setProducts = () => {
  return async (dispatch) => {
    const response = await axios.put('/api/products/');
    dispatch({ type: 'SET_PRODUCTS', products: response.data });
  };
};

export const singleProduct = (id) => {
  return async (dispatch) => {
    const response = await axios.put(`/api/products/${id}`);
    dispatch({ type: 'SINGLE_PRODUCT', product: response.data });
  };
};

export const createProduct = (data) => {
  return async (dispatch) => {
    const response = await axios.post('/api/auth/admin', data);
    dispatch({ type: 'CREATE_PRODUCT', product: response.data });
  };
};

export default products;
