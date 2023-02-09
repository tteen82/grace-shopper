import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
// import { removeItem } from '../store/cart.js';
import { logout } from '../store';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
  // const { cart } = useSelector((state) => state);
  // const dispatch = useDispatch();

  const items = cart.lineItems || [];
  let totalPrice = 0;
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => {
          totalPrice += item.quantity * item.product.price;
          return (
            <li key={item.id}>
              {item.product.name} Quantity : {item.quantity} Price : $
              {item.product.price}
              <button
              // onClick={(e) => {
              //   e.preventDefault();
              //   removeItem(item, item.quantity);
              // }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <h1>Total Price: ${totalPrice}</h1>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // removeItem: (id) => {
//     //   dispatch(removeItem(id));
//     // },
//   };
// };

export default connect((state) => state)(Cart);
