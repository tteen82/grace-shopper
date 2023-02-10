import React from 'react';
import { connect } from 'react-redux';
import { addingReview } from '../store/products';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      stars: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addingReview({ ...this.state });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { description, stars } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="review-form" onSubmit={handleSubmit}>
        <label htmlFor="stars">Stars:</label>
        <input name="stars" value={stars} onChange={handleChange} />
        <label htmlFor="description">description:</label>
        <input name="description" value={description} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  addingReview: (id, data) => dispatch(addingReview(id, data, history)),
});

export default connect(null, mapDispatchToProps)(ReviewForm);
