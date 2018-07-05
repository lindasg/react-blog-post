import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=LINDASG1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: 'fetch_posts',
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(() => callback());

  return {
    type: 'create_posts',
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

  return {
    type: 'fetch_post',
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => callback());

  return {
    type: 'delete_post',
    payload: id
  }
}
