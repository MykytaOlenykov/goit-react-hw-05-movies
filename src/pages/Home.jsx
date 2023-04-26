import { useState, useEffect } from 'react';
import * as moviesAPI from 'services';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data = await moviesAPI.getTrending();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
