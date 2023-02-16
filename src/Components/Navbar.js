import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart } from '../store';
import Login from './Login';
import Home from './Home';
import LoginModal from './LoginModal';

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
      setShow(false);
      setButtonShow(false);
    }
  }, [auth]);
  const [show, setShow] = useState(false);
  const [buttonShow, setButtonShow] = useState(true);
  console.log('vfdkbndbfd', buttonShow);
  return (
    <div id="navbar">
      <Link to="/">Acme Shopping</Link>
      <Link to="/account/:id">Account</Link>
      <Link to="/cart">Cart({quantities})</Link>

      {auth.id ? <Home props={true} /> : <Login />}

      {buttonShow ? (
        <button className="App" onClick={() => setShow(true)}>
          LOGIN HERE
        </button>
      ) : null}

      <Login show={show} />
    </div>
  );
};

export default Navbar;
