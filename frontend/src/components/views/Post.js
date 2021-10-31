import PropTypes from 'prop-types';
import { useState } from 'react';

import useInteraction from '../../hooks/useInteraction';

const Post = ({dataPost, aditionalEvt}) => {
  const [isLike, setIsLike] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {createInteraction, deleteInteraction} = useInteraction();

  const handleInteraction = () => {
    setIsLoading(true);
    if (!isLike) {
      createInteraction({
        idPost: dataPost.idPost, photographer: dataPost.photographer, photographerId: dataPost.photographerId, photographerUrl: dataPost.photographerUrl,
        srcImageMedium: dataPost.srcImageMedium, srcImageSmall: dataPost.srcImageSmall, url: dataPost.url
      }).then(() => {
        setIsLike(!isLike);
        setIsLoading(false);
      });
    } else {
      deleteInteraction({idPost: dataPost.idPost}).then(() => {
        setIsLike(!isLike);
        setIsLoading(false);
      });
    }

    if (aditionalEvt)
      aditionalEvt();
  };

  return (
    <article className="posts mb-3">
      <strong>{ dataPost.photographer }</strong>
      <div style={ {backgroundColor: '#00000033', borderRadius: '10px'} } className="pb-2">
        <img src={ dataPost.srcImageSmall }
          style={ {
            width: '100%',
            height: '10rem',
            objectFit: 'cover',
            borderRadius: '10px'
          } }
        />
        <a href={ dataPost.photographerUrl }
          target="_blank"
          rel="noreferrer"
        >
          Ver Sitio Fotografo
        </a>
      </div>
      <button type="button"
        style={ {backgroundColor: 'transparent', border: 'none'} }
        onClick={ handleInteraction } disabled={ isLoading }
      >
        <i className={ `bi bi-heart${isLike ? '-fill' : ''}` } style={ {fontSize: '1.5rem'} }> 0 likes</i>
      </button>
    </article>
  );
};

Post.propTypes = {
  dataPost: PropTypes.object.isRequired,
  aditionalEvt: PropTypes.func
};

export default Post;