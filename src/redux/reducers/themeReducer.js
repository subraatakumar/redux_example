// initial state

import { colors } from "../../util/colors";
import actionTypes from "../actions/actionTypes";

const initialState = { name: "light", colors: colors["light"] };

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIGHT:
      return { name: actionTypes.LIGHT, colors: colors[actionTypes.LIGHT] };
      break;
    case actionTypes.DARK:
      return { name: actionTypes.DARK, colors: colors[actionTypes.DARK] };
      break;
    default:
      return state;
  }
};

export default themeReducer;
