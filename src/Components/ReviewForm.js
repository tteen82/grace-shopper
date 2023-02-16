import React from 'react';
import { connect } from 'react-redux';
import { addingReview, setReviews } from '../store';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      stars: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.setReviews(this.props.id);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.comment === '') {
      alert('Please Adding Comment');
    } else {
      this.props.addingReview(this.props.id, this.props.auth.id, this.state);
      this.setState({ comment: '', stars: 1 });
    }
  }

  handleChange(evt) {
    console.log(this.state);
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { comment, stars } = this.state;
    const { handleSubmit, handleChange } = this;
    let reviews = this.props.reviews || [];
    return (
      <Box
        sx={{
          width: '100%',

          display: 'flex',
          justifyContent: 'space-around',
          bgcolor: '#F2F4F4',
        }}
      >
        <Paper
          style={{
            width: 300,
            padding: 30,
            margin: 10,
          }}
        >
          <h1> Reviews</h1>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <Paper
                  style={{
                    margin: 10,
                    padding: 5,
                    height: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    justifyContent: 'space-around',
                  }}
                >
                  {'⭐️'.repeat(review.stars)}
                  <br />
                  <TextField
                    label="Name"
                    defaultValue={review.user.username}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    label="Comment"
                    defaultValue={review.comment}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Paper>
              </li>
            ))}
          </ul>
        </Paper>
        {this.props.auth.id ? (
          <Paper style={{ width: 300, padding: 30, margin: 10 }}>
            <h1> Adding Reviews</h1>
            <form>
              <Typography component="Stars">Rating</Typography>
              <Rating
                name="stars"
                value={stars.toString()}
                onChange={handleChange}
              />
              <TextField
                id="comment"
                label="Comment"
                name="comment"
                value={comment}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSubmit}
              >
                Send
              </Button>
            </form>
          </Paper>
        ) : (
          ''
        )}
      </Box>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addingReview: (productId, userId, data) =>
    dispatch(addingReview(productId, userId, data)),
  setReviews: (id) => dispatch(setReviews(id)),
});

export default connect((state) => state, mapDispatchToProps)(ReviewForm);
