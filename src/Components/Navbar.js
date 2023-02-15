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
  //   const modal = document.getElementById('myModal');

  //   // Get the button that opens the modal
  //   const btn = document.getElementById('myBtn');

  //   // Get the <span> element that closes the modal
  //   //   const span = document.getElementsByClassName('close')[0];

  //   // When the user clicks the button, open the modal
  //   function modalbutton() {
  //     modal.style.display = 'block';
  //   }

  // When the user clicks on <span> (x), close the modal
  //   span.onclick = function () {
  //     modal.style.display = 'none';
  //   };
  return (
    <div id="navbar">
      <Link to="/">Acme Shopping</Link>
      <Link to="/cart">Cart({quantities})</Link>
      {/* <Link to="/account/:id">Account</Link> */}
      {/* <button id="myBtn" onClick={modalbutton()}>
        Open Modal
      </button> */}
      {auth.id ? <Home /> : <Login />}
    </div>
  );
};

export default Navbar;
