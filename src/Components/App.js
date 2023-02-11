import React, { useEffect } from 'react';
import Home from './Home';
import Cart from './Carts';
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart } from '../store';
import { Link, Routes, Route } from 'react-router-dom';
import { setProducts } from '../store';

const App = () => {
  const { auth } = useSelector((state) => state);

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
    <div>
      <h1>Acme Shopping insert navbar here</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
