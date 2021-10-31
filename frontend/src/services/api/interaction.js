import axios from 'axios';
import { baseAPI } from '../../const/baseAPI';

const BASE_API = `${baseAPI}/interaction`;

export const createInteraction = async({idPost, token, photographerId, photographerUrl, photographer, url, srcImageSmall, srcImageMedium}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  
  let response = await axios.post(
    `${BASE_API}/create-interaction/${idPost}`,
    {
      photographerId, photographerUrl,
      photographer, url, srcImageSmall, srcImageMedium
    },
    config
  );
  return response;
};
export const getPosts = async({ searcher, token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  let response = await axios.get(`${BASE_API}/get-images/${searcher}'`, config);
  return response;
};
export const getFavoritesPosts = async({ token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  let response = await axios.get(`${BASE_API}/get-favorites-posts`, config);
  return response;
};
export const getLikesFromPost = async({idPost}) => {
  let response = await axios.get(`${BASE_API}/get-likes-post/${idPost}`);
  return response;
};
export const deleteInteraction = async({idPost, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  let response = await axios.delete(`${BASE_API}/delete-interaction/${idPost}`, config);
  return response;
};