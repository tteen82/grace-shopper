import axios from 'axios';
const reviews = (state = [], action) => {
  if (action.type === 'SET_REVIEWS') {
    return action.reviews;
  }
  if (action.type === 'ADD_REVIEW') {
    return [...state, action.reviews];
  }
  return state;
};

export const setReviews = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/reviews/${id}`);
    dispatch({ type: 'SET_REVIEWS', reviews: response.data });
  };
};

export const addingReview = (productId, userId, data) => {
  return async (dispatch) => {
    const response = await axios.post(
      `/api/reviews/${productId}/${userId}`,
      data
    );
    dispatch({ type: 'ADD_REVIEW', reviews: response.data });
  };
};
export default reviews;
