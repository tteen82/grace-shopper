import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { singleProduct } from '../store';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

class Product extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.singleProduct(this.props.match.params.id);
  }
  render() {
    const { id, name, price, imageUrl, details } =
      this.props.products.singleProduct;
    return (
      <Box>
        <Paper
          style={{
            margin: 'auto',
            marginBottom: 30,
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          variant="outlined"
        >
          <h1>{name}</h1>
          <p> ${price}</p>
          <img src={imageUrl} className="singleImage" />
          <Paper
            style={{
              width: '80%',
              margin: 15,
              padding: 15,
            }}
            elevation={3}
          >
            {details}
          </Paper>
        </Paper>
        <Paper
          style={{
            margin: 'auto',
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          variant="outlined"
        >
          <ReviewForm id={this.props.match.params.id} />
        </Paper>
      </Box>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    singleProduct: (id) => {
      dispatch(singleProduct(id));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(Product);
