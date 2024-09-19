// thunk action creator

import actionTypes from "../actions/actionTypes";

const fetchProducts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.LOADING });
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const json = await response.json();
      dispatch({ type: actionTypes.SUCCESS, payload: json });
    } catch (e) {
      dispatch({ type: actionTypes.FAILURE });
    }
  };
};

export default fetchProducts;

// Loading
// successfully
// error
