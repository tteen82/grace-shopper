import axios from 'axios';

const orders = (state = [], action) => {
  if (action.type === 'SET_ORDERS') {
    return action.orders;
  }
  return state;
};
export const setOrders = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const response = await axios.get('/api/orders/order/', {
      headers: {
        authorization: token,
      },
    });
    console.log('response from reducerrr', response.data);
    dispatch({ type: 'SET_ORDERS', orders: response.data });
  };
};

export default orders;
