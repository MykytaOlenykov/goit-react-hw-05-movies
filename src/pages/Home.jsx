import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList />
    </main>
  );
};

export default Home;
