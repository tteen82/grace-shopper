import React from 'react';
import { connect } from 'react-redux';
import { addingReview, setReviews } from '../store';

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
  componentDidMount() {
    console.log(this.props);
    this.props.setReviews(this.props.id);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addingReview(this.props.id, this.props.auth.id, this.state);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { description, stars } = this.state;
    const { handleSubmit, handleChange } = this;
    let reviews = this.props.reviews || [];

    return (
      <div>
        <div>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                rating : {review.stars}
                <br />
                description : {review.description}
              </li>
            ))}
          </ul>
        </div>
        <form id="review-form" onSubmit={handleSubmit}>
          <label htmlFor="stars">Stars:</label>
          <input name="stars" value={stars} onChange={handleChange} />
          <label htmlFor="description">description:</label>
          <input
            name="description"
            value={description}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
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
