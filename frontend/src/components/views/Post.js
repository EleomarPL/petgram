import PropTypes from 'prop-types';

const Post = ({dataPost}) => {
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
      <i className="bi bi-heart-fill" style={ {fontSize: '1.5rem'} }> 0 likes</i>
    </article>
  );
};

Post.propTypes = {
  dataPost: PropTypes.object.isRequired
};

export default Post;