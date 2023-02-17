import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart } from '../store';
import { logout, emptyCart } from '../store';

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
  const logoutUser = () => {
    setButtonShow(true);
    dispatch(logout());
  };
  return (
    <div id="navbar">
      <Link
        style={{
          textDecoration: 'none',
          fontSize: 'xxx-large',
          alignSelf: 'flex-end',
        }}
        to="/"
      >
        Acme Shopping
      </Link>
      {/* <Link style={{ textDecoration: 'none' }} to="/account/:id">
        Account
      </Link> */}
      <Link style={{ textDecoration: 'none' }} to="/cart">
        Cart({quantities})
      </Link>

      {auth.id ? (
        <Home buttonShow={buttonShow} logout={logoutUser} />
      ) : (
        <Login />
      )}

      {buttonShow ? (
        <button className="App" onClick={() => setShow(true)}>
          LOGIN HERE
        </button>
      ) : null}

      <Login show={show} />
      {/* <div className="text-3xl font-bold underline"> HELLOOO TESTING</div> */}
    </div>
  );
};

export default Navbar;
