import React from 'react';
import { connect } from 'react-redux';
import { addingReview, setReviews } from '../store';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      stars: '⭐️',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.setReviews(this.props.id);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addingReview(this.props.id, this.props.auth.id, this.state);
    this.setState({ comment: '', stars: '⭐️' });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { comment, stars } = this.state;
    const { handleSubmit, handleChange } = this;
    let reviews = this.props.reviews || [];
    return (
      <div>
        <div>
          <h1> Reviews</h1>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                from: {review.user.username}
                <br />
                rating : {review.stars}
                <br />
                comment : {review.comment}
              </li>
            ))}
          </ul>
        </div>
        {this.props.auth.id ? (
          <div id="review-form">
            <h1> Adding Reviews</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="stars">Stars:</label>
              <select name="stars" onChange={handleChange}>
                <option value="⭐️">⭐️</option>
                <option value="⭐️⭐️">⭐️⭐️</option>
                <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
                <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
                <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
              </select>
              <label htmlFor="description">Comment:</label>
              <input name="comment" value={comment} onChange={handleChange} />
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addingReview: (productId, userId, data) =>
    dispatch(addingReview(productId, userId, data)),
  setReviews: (id) => dispatch(setReviews(id)),
});

export default connect((state) => state, mapDispatchToProps)(ReviewForm);
