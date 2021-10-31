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
    </section>
  );
};

export default Favorites;