import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart } from '../store';
import Login from './Login';
import Home from './Home';
const Navbar = () => {
  const { auth, cart } = useSelector((state) => state);
  cart.lineItems = cart.lineItems || [];
  let quantities = cart.lineItems
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginWithToken());
  }, []);

  useEffect(() => {
    if (auth.id) {
      dispatch(fetchCart());
    }
  }, [auth]);
  return (
    <div id="navbar">
      {auth.id ? <Home /> : <Login />}
      <h1>Acme Shopping</h1>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart({quantities})</Link>
      <Link to="/account/:id">Account</Link>
    </div>
  );
};

export default Navbar;
