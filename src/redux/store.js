import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import themeReducer from "./reducers/themeReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
// store
const store = createStore(rootReducer);

export default store;
