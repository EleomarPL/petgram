import axios from 'axios';
import { baseAPI } from '../../const/baseAPI';

export const createInteraction = async({ idPost, token }) => {
  let response = await axios.post(`${baseAPI}/interaction/create-interaction/${idPost}'`, {}, token);
  return response;
};
export const getPosts = async({ searcher, token }) => {
  let response = await axios.get(`${baseAPI}/interaction/get-images/${searcher}'`, {}, token);
  return response;
};