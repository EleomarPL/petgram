import { Container, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';

import ComponentGrouper from '../components/common/ComponentGrouper';
import SpinnerLoading from '../components/common/SpinnerLoading';
import Post from '../components/views/Post';
import useInteraction from '../hooks/useInteraction';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {getFavoritesPosts} = useInteraction();

  useEffect(() => {
    setIsLoading(true);
    getFavoritesPosts().then((res) => {
      setIsLoading(false);
      console.log(res);
      if (res)
        setFavorites(res);
    });
  }, []);

  return (
    <section>
      <Container css={ {marginTop: '1rem', marginBottom: '5rem'} }>
        <Text
          h1
          size={ 39 }
          css={ {
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
            textAlign: 'center'
          } }
          weight="bold"
        >
          Favoritos
        </Text>
        <ComponentGrouper>
          { favorites &&
          favorites.map(favorite =>
            <Post
              key={ favorite.id }
              dataPost={ favorite }
            />
          )
          }
        </ComponentGrouper>
      </Container>
      { isLoading &&
        <SpinnerLoading />
      }
      { !isLoading && favorites.length === 0 &&
        <Text
          size={ 30 }
          css={ {
            textGradient: '45deg, $purple600 -20%, $pink600 100%',
            textAlign: 'center'
          } }
          weight="bold"
        >
          No hay favoritos
        </Text>
      }
    </section>
  );
};

export default Favorites;