import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, emptyCart } from '../store';
import Products from './Products';
import Login from './Login';
import { Link } from 'react-router-dom';

/*
          <div>
            Welcome {auth.username}!!
            <button
              onClick={() => {
                dispatch(logout());
                dispatch(emptyCart());
              }}
            >
              Logout
            </button>
          </div>
*/

const Home = (props) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {auth.id ? (
        <div>
          <Link to="/account/:id">{auth.username.toUpperCase()}</Link>
          <button
            onClick={() => {
              dispatch(logout());
              dispatch(emptyCart());
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <Login />
      )}
      {/* <h1>Home</h1>
      <div>
        Welcome {auth.username}!!
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div> */}

      {/* <Products /> */}
    </div>
  );
};

export default Home;
