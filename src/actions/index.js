import axios from "axios";
export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";
export const FETCH_POST = "fetch_post";

const ROOT_URL = "https://reduxblog.herokuapp.com/api";
const key = "?key=kamal";

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${key}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export const createPost = (values, callback) => {
  const request = axios
    .post(`${ROOT_URL}/posts${key}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
};

export const fetchPost = id => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${key}`);

  return {
    type: FETCH_POST,
    payload: request
  };
};
