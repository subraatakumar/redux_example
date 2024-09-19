import { applyMiddleware, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import themeReducer from "./reducers/themeReducer";
import productReducer from "./reducers/productReducer";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  product: productReducer,
});
// store
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
