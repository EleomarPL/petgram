import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';

import useInteraction from '../../hooks/useInteraction';
import SpinnerLoading from '../common/SpinnerLoading';
import Post from './Post';

const ManagmentSearcher = () => {
  const {pathname} = useLocation();

  const [searcher, setSearcher] = useState('dog');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {getPostsBySearcher} = useInteraction();

  useEffect(() => {
    setIsLoading(true);
    const splitPath = pathname.split('/');
    if (splitPath[2]) setSearcher(splitPath[2]);
    else setSearcher('dog');

    getPostsBySearcher({searcher}).then(res => {
      setIsLoading(false);
      if (res)
        setPosts(res);
    });
  }, [pathname]);

  return (
    <div>
      { posts &&
        posts.map(post =>
          <Post
            initialValueLike={ post.like }
            key={ post.id }
            dataPost={ post }
          />
        )
      }
      { isLoading &&
        <SpinnerLoading />
      }
      { !isLoading && posts.length === 0 &&
        <p className="d-flex justify-content-center fw-bold"
          style={ {fontSize: '1.5rem'} }
        >
          No hay Publicaciones
        </p>
      }
    </div>
  );
};

export default ManagmentSearcher;