import actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        loading: true,
        data: [],
        error: "",
      };
    case actionTypes.SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case actionTypes.FAILURE:
      return {
        loading: false,
        data: [],
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

export default productReducer;
