import React from 'react';
import { connect } from 'react-redux';
import { updateAuth } from '../store';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateAuth(this.props.auth.id, this.state);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <h2>Update Your Information</h2>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="username"
              value={this.state.username}
              name="username"
              onChange={handleChange}
            />
            <TextField
              label="password"
              value={this.state.password}
              name="password"
              onChange={handleChange}
            />
          </form>
        </Box>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateAuth: (id, data) => dispatch(updateAuth(id, data)),
});

export default connect((state) => state, mapDispatchToProps)(AccountForm);
