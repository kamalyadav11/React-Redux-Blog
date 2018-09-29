import _ from "lodash";
import { FETCH_POSTS } from "../actions";

const fetchPosts = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
};

export default fetchPosts;
