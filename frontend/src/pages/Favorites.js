import { useEffect, useState } from 'react';
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
    <section className="mb-4">
      { favorites &&
          favorites.map(favorite =>
            <Post
              key={ favorite.id }
              dataPost={ favorite }
            />
          )
      }
      { isLoading &&
        <SpinnerLoading />
      }
      { !isLoading && favorites.length === 0 &&
        <p className="d-flex justify-content-center fw-bold"
          style={ {fontSize: '1.5rem'} }
        >
          No hay Favoritos
        </p>
      }
    </section>
  );
};

export default Favorites;