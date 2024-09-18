// initial state

import { colors } from "../../util/colors";

const initialState = { name: "light", colors: colors["light"] };

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "light":
      return { name: "light", colors: colors["light"] };
      break;
    case "dark":
      return { name: "dark", colors: colors["dark"] };
      break;
    default:
      return state;
  }
};

export default themeReducer;
