import React from 'react';
import { connect } from 'react-redux';
import { updateAuth } from '../store';

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
  // updateAuth = () => {
  //   this.props.updateAuth({
  //     this.props
  //   })
  // };

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
        <div>UPDATE USER INFO</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username:</label>
          <input
            name="username"
            value={this.state.username}
            onChange={handleChange}
          />
          <label htmlFor="password">password:</label>
          <input
            name="password"
            value={this.state.password}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateAuth: (id, data) => dispatch(updateAuth(id, data)),
});

export default connect((state) => state, mapDispatchToProps)(AccountForm);
