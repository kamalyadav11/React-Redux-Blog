import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import fetchPosts from "./fetchPostReducer";

export default combineReducers({
  fetchPosts,
  form: formReducer
});
