import React from 'react';
import Cart from './Carts';
import Product from './Product';
import Products from './Products';
import Account from './Account';
import Navbar from './Navbar';

import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="body">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/products/:id" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/account/:id" component={Account} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
