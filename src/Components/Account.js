import React from 'react';
import { connect } from 'react-redux';
import { loginWithToken, setOrders } from '../store';
import AccountForm from './AccountForm';

class Account extends React.Component {
  componentDidMount() {
    this.props.loginWithToken();
    this.props.setOrders(this.props.auth.id);
  }

  render() {
    console.log('this.props =', this.props);
    const { username, password, isAdmin } = this.props.auth;
    const { orders } = this.props;
    function updateUSer() {
      var x = document.getElementById('test');
      if (x.style.display === 'none') {
        x.style.display = 'block';
      } else {
        x.style.display = 'none';
      }
    }

    return (
      <div>
        <div>
          <h2>User Information</h2>
          <div>Name : {username}</div>
          <div>password: {password}</div>
          <hr></hr>
        </div>

        <h2>Previous Orders</h2>
        {orders.map((order) => {
          return (
            <div key={order.id}>
              <div>Order Number: {order.id}</div>
            </div>
          );
        })}
        <div>
          <hr></hr>
        </div>
        {isAdmin ? <div>ADMIN INFO HERE</div> : <div></div>}
        {/* <div id="test"> TEST DIV</div> */}
        <AccountForm />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginWithToken: (id) => {
      dispatch(loginWithToken(id));
    },
    updateAuth: (id) => {
      dispatch(updateAuth(id));
    },
    setOrders: (id) => {
      dispatch(setOrders(id));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(Account);
