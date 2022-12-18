import { Container, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';

import useInteraction from '../../hooks/useInteraction';
import ComponentGrouper from '../common/ComponentGrouper';
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
    setPosts([]);
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
      <Container css={ {marginTop: '1rem', marginBottom: '5rem'} }>
        <ComponentGrouper>
          { posts &&
          posts.map(post =>
            <Post
              initialValueLike={ post.like }
              key={ post.id }
              dataPost={ post }
            />
          )
          }
        </ComponentGrouper>
      </Container>
      { isLoading &&
        <SpinnerLoading />
      }
      { !isLoading && posts.length === 0 &&
        <Text
          size={ 30 }
          css={ {
            textGradient: '45deg, $purple600 -20%, $pink600 100%',
            textAlign: 'center'
          } }
          weight="bold"
        >
          No hay publicaciones
        </Text>
      }
    </div>
  );
};

export default ManagmentSearcher;