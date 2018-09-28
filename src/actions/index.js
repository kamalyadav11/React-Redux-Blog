export const FETCH_POSTS = "fetch_posts";
import axios from "axios";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const key = "?key=kamal";

export const fetchposts = () => {
  const request = axios.get(`${ROOT_URL}/posts${key}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
};
