import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart } from '../store';
import Login from './Login';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const empty = () => {
    dispatch(emptyCart());
  };
  return (
    <div>
      {auth.id ? (
        <div>
          <Link to="/account/:id">{auth.username.toUpperCase()}</Link>
          <button
            onClick={() => {
              props.logout();
              empty();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
