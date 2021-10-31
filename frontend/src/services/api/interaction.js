import axios from 'axios';
import { baseAPI } from '../../const/baseAPI';

const BASE_API = `${baseAPI}/interaction`;

export const createInteraction = async({ idPost, token }) => {
  let response = await axios.post(`${BASE_API}/create-interaction/${idPost}'`, {}, token);
  return response;
};
export const getPosts = async({ searcher, token }) => {
  let response = await axios.get(`${BASE_API}/get-images/${searcher}'`, {}, token);
  return response;
};