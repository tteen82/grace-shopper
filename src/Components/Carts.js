import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  let items = cart.lineItems;
  items = items || [];
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
            </li>
          );
        })}
      </ul>
      <h1>Total Price: ${totalPrice}</h1>
    </div>
  );
};

export default Cart;
