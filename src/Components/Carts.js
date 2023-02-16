import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, createOrder } from '../store';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
    console.log(this.state);
  }


  render() {
    console.log('test')
    const { cart } = this.props;
    const { handleClick, handleSubmit, handleChange } = this;
    const { ccNumber, address, name } = this.state;
    let items = cart.lineItems;
    items = items || [];
    let totalPrice = 0;
    // return (
    //   <div>
    //     <h1>Cart</h1>
    //     <ul>
    //       {items.map((item) => {
    //         totalPrice += item.quantity * item.product.price;
    //         return (
    //           <li key={item.id}>
    //             {item.product.name} Quantity : {item.quantity} Price : $
    //             {item.product.price}
    //             <Button variant="contained" value={item.product.id} onClick={handleClick} endIcon={<DeleteIcon />}>
    //               Delete
    //             </Button>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //     <h1>Total Price: ${totalPrice}</h1>
    //     <div id="orderForm">
    //       <h1> Check Out</h1>
    //       <Box
    //       component="form"
    //       sx={{
    //       '& .MuiTextField-root': { m: 1, width: '25ch' },
    //       }}
    //       noValidate
    //       autoComplete="off"
    //       >
    //       <form id="order-form" onSubmit={handleSubmit}>
    //         {/* <label htmlFor="ccNumber">Credit Card Number:</label>
    //         <input name="ccNumber" value={ccNumber} onChange={handleChange} /> */}
    //         <TextField label="Credit Card Number:" onChange={handleChange} value={ccNumber} name="ccNumber" type="text"/>
    //         <TextField label="Name:" onChange={handleChange} value={name} name="name" type="text"/>
    //         {/* <label htmlFor="name">Name:</label>
    //         <input name="name" value={name} onChange={handleChange} /> */}
    //         <TextField label="Shipping Address:" onChange={handleChange} value={address} name="address" type="text"/>
    //         {/* <label htmlFor="address">Address:</label>
    //         <input name="address" value={address} onChange={handleChange} /> */}
    //       </form>
    //       </Box>
    //       <Button variant="contained" type="submit">Submit</Button>
    //     </div>
    //   </div>
    // );
      return (
      <div>
        <h1>Cart</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Items</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
             </TableHead>
             <TableBody>
          {items.map((item) => {
            totalPrice += item.quantity * item.product.price;
            return (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.product.name}
                </TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">${item.product.price}</TableCell>
                <TableCell align="right"><Button variant="contained" value={item.product.id} onClick={handleClick} endIcon={<DeleteIcon />}></Button></TableCell>
                </TableRow>
              )})}
              <TableCell align="right"><h1>Total Price:</h1></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">${totalPrice}</TableCell>
                </TableBody>
                </Table>
              </TableContainer>
        {/* <h1>Total Price: ${totalPrice}</h1> */}
        <div id="orderForm">
          <h1> Check Out</h1>
          <Box
          component="form"
          sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          >
          <form id="order-form">
            {/* <label htmlFor="ccNumber">Credit Card Number:</label>
            <input name="ccNumber" value={ccNumber} onChange={handleChange} /> */}
            <TextField label="Credit Card Number:" onChange={handleChange} value={ccNumber} name="ccNumber" type="text"/>
            <TextField label="Name:" onChange={handleChange} value={name} name="name" type="text"/>
            {/* <label htmlFor="name">Name:</label>
            <input name="name" value={name} onChange={handleChange} /> */}
            <TextField label="Shipping Address:" onChange={handleChange} value={address} name="address" type="text"/>
            {/* <label htmlFor="address">Address:</label>
            <input name="address" value={address} onChange={handleChange} /> */}
          </form>
          </Box>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
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
