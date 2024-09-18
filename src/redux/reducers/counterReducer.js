// initial state
const initialState = 0;

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "inc":
      return state + 1;
    default:
      return state;
  }
};

export default counterReducer;
