// initial state

const initialState = "light";

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "light":
      return "light";
      break;
    case "dark":
      return "dark";
      break;
    default:
      return state;
  }
};

export default themeReducer;
