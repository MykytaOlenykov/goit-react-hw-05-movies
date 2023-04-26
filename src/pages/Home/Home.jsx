import { useState, useEffect } from 'react';
import * as moviesAPI from 'services';
import MoviesList from 'components/MoviesList/MoviesList';
import * as S from './Home.styled';

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
      <section>
        <S.Title>Trending today</S.Title>
        <MoviesList movies={movies} />
      </section>
    </main>
  );
};

export default Home;
