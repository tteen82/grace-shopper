import React, { useState } from 'react';
import { attemptLogin } from '../store';
import { useDispatch } from 'react-redux';

const Login = (props) => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const onChange = (ev) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };

  const login = (ev) => {
    ev.preventDefault();
    dispatch(attemptLogin(credentials));
  };
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      {' '}
      <div className="modal-content">
        <h2>Login</h2>
        <form onSubmit={login}>
          <input
            placeholder="username"
            value={credentials.username}
            name="username"
            onChange={onChange}
          />
          <input
            placeholder="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
          <button onClick={props.onClose}>Login</button>
          <button className="button"> CLoSe</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
