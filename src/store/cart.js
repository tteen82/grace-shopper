import axios from 'axios';
const cart = (state = { lineItems: [] }, action) => {
  if (action.type === 'SET_CART') {
    return { ...state, lineItems: action.cart };
  }
  if (action.type === 'ADD_CART') {
    return { ...state, lineItems: [...state.lineItems, action.cart] };
  }
  if (action.type === 'DELETE_CART') {
    const newLineItems = state.lineItems.filter(
      (item) => item.id !== action.item.id
    );
    return { ...state, lineItems: [...newLineItems] };
  }
  return state;
};

//get the full cart
export const fetchCart = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const response = await axios.get('/api/orders/cart', {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: 'SET_CART', cart: response.data });
  };
};

//add to the cart
export const addToCart = (product, quantity) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const response = await axios.post('/api/orders/cart/', {
      headers: {
        authorization: token,
      },
      product,
      quantity,
    });
    dispatch({ type: 'ADD_CART', cart: response.data });
  };
};

//Remove from the cart
export const removeFromCart = (product, quantityToRemove) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const response = await axios.put('/api/orders/cart/', {
      headers: {
        authorization: token,
      },
      product,
      quantityToRemove,
    });
    dispatch({ type: 'DELETE_CART', cart: response.data });
  };
};

export default cart;
