import api from './api-config';

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
};

export const getOnePost = async id => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
};
