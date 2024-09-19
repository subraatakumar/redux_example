import actionTypes from "../actions/actionTypes";

// initial state
const initialState = 0;

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INC:
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
