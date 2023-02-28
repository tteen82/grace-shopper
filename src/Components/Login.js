import React, { useState } from 'react';
import { attemptLogin } from '../store';
import { useDispatch } from 'react-redux';

const Login = (props) => {
  let show = props.show;
  let setShow = props.setShow;
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
  return (
    <div className="modal">
      {show ? (
        <div className="modal-content">
          <h2>Login</h2>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShow(false);
            }}
          >
            x
          </button>
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
          </form>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Login;
