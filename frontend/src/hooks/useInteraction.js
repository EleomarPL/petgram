import { notifyError, notifySuccess, notifyWarning } from '../const/notifications';

import {
  deleteInteraction as deleteInteractionAxios,
  getFavoritesPosts as getFavoritesPostsAxios,
  createInteraction as createInteractionAxios,
  getPosts,
  getLikesFromPost
} from '../services/api/interaction';

const useInteraction = () => {
  const getLikesByIdPost = async({idPost}) => {
    try {
      let {data} = await getLikesFromPost({idPost});
      return data;
    } catch ( err ) {
      if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return null;
    }
  };
  const getFavoritesPosts = async() => {
    const token = JSON.parse(window.localStorage.getItem('session'));

    try {
      let {data} = await getFavoritesPostsAxios({token});
      return data;
    } catch ( err ) {
      if (err.response.data.error === 'Token missing or invalid') {
        notifyWarning('Al parecer, perdiste los permisos, te recomiendo cerrar sesión');
      } else if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return null;
    }
  };
  const getPostsBySearcher = async({searcher}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));

    try {
      let {data} = await getPosts({token, searcher});
      return data;
    } catch ( err ) {
      if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return null;
    }
  };
  const deleteInteraction = async({idPost}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));

    try {
      let {data} = await deleteInteractionAxios({idPost, token});
      notifySuccess('Reservación eliminada correctamente');
      return data;
    } catch ( err ) {
      if (err.response.data.error === 'Token missing or invalid') {
        notifyWarning('Al parecer, perdiste los permisos, te recomiendo cerrar sesión');
      } else if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return false;
    }
  };
  const createInteraction = async({idPost, photographer, photographerId, photographerUrl, srcImageMedium, srcImageSmall, url}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));

    try {
      let {data} = await createInteractionAxios({
        idPost, photographer, photographerId, photographerUrl, srcImageMedium, srcImageSmall, token, url
      });
      return data;
    } catch ( err ) {
      if (err.response.data.error === 'Token missing or invalid') {
        notifyWarning('Al parecer, perdiste los permisos, te recomiendo cerrar sesión');
      } else if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return false;
    }
  };

  return {
    deleteInteraction, getFavoritesPosts, createInteraction, getPostsBySearcher, getLikesByIdPost
  };
};

export default useInteraction;