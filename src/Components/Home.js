import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import Products from './Products';
import Login from './Login';

const Home = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {auth.id ? (
        <div>
          <div>
            Welcome {auth.username}!!
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>
        </div>
      ) : (
        <Login />
      )}
      <h1>Home</h1>
      <Products />
    </div>
  );
};

export default Home;
