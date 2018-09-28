import axios from "axios";
export const FETCH_POSTS = "fetch_posts";

const ROOT_URL = "https://reduxblog.herokuapp.com/api";
const key = "?key=kamal";

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${key}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
};
