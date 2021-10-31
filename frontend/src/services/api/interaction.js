import axios from 'axios';
import { baseAPI } from '../../const/baseAPI';

const BASE_API = `${baseAPI}/interaction`;

export const createInteraction = async({idPost, token, photographerId, photographerUrl, photographer, url, srcImageSmall, srcImageMedium}) => {
  let response = await axios.post(
    `${BASE_API}/create-interaction/${idPost}'`,
    {
      photographerId, photographerUrl,
      photographer, url, srcImageSmall, srcImageMedium
    },
    token
  );
  return response;
};
export const getPosts = async({ searcher, token }) => {
  let response = await axios.get(`${BASE_API}/get-images/${searcher}'`, {}, token);
  return response;
};