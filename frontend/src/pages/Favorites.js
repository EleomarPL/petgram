import Post from '../components/views/Post';

const Favorites = () => {
  return (
    <section className="mb-4">
      <Post dataPost={
        {photographer: 'Eleomar Pedro', photographerUrl: '/'}
      } />
    </section>
  );
};

export default Favorites;