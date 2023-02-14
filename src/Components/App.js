import React, { useEffect } from 'react';
import Home from './Home';
import Cart from './Carts';
import Product from './Product';
import Login from './Login';
import Products from './Products';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart } from '../store';

import { Link, Switch, Route } from 'react-router-dom';

const App = () => {
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
    <div>
      <h1>Acme Shopping</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart({quantities})</Link>
      </nav>
      {auth.id ? <Home /> : <Login />}
      {/* {!!auth.id && ( */}
      <div>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/products/:id" component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
      {/* )} */}

      {/* 
      <h1>Acme Shopping insert navbar here</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
       */}
    </div>
  );
};

export default App;
