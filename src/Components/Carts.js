import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, createOrder } from '../store';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ccNumber: '',
      address: '',
      name: this.props.auth.username,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(evt) {
    evt.preventDefault();
    this.props.removeFromCart(evt.target.value);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.ccNumber.length !== 16) {
      alert('Credit Card Number Should Be 16 Digits');
    } else {
      this.props.createOrder();
      this.setState({
        ccNumber: '',
        address: '',
        name: this.props.auth.username,
      });
    }
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    const { cart } = this.props;
    const { handleClick, handleSubmit, handleChange } = this;
    const { ccNumber, address, name } = this.state;
    let items = cart.lineItems;
    items = items || [];
    let totalPrice = 0;
    return (
      <div>
        <h1>Cart</h1>
        <ul>
          {items.map((item) => {
            totalPrice += item.quantity * item.product.price;
            return (
              <li key={item.id}>
                {item.product.name} Quantity : {item.quantity} Price : $
                {item.product.price}
                <button value={item.product.id} onClick={handleClick}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <h1>Total Price: ${totalPrice}</h1>
        <div id="orderForm">
          <h1> Check Out</h1>
          <form id="order-form" onSubmit={handleSubmit}>
            <label htmlFor="ccNumber">CreditCard Number:</label>
            <input name="ccNumber" value={ccNumber} onChange={handleChange} />
            <label htmlFor="name">Name:</label>
            <input name="name" value={name} onChange={handleChange} />
            <label htmlFor="address">Address:</label>
            <input name="address" value={address} onChange={handleChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (data) => {
    dispatch(removeFromCart(data));
  },
  createOrder: () => {
    dispatch(createOrder());
  },
});

export default connect((state) => state, mapDispatchToProps)(Cart);
