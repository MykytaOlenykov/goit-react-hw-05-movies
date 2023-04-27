import { useState, useEffect } from 'react';
import * as moviesAPI from 'services';
import { Status } from 'services';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import * as S from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setStatus(Status.PENDING);

        const { results } = await moviesAPI.getTrending();

        setStatus(Status.RESOLVED);
        setMovies(results);
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
        setError(error);
      }
    };

    fetchTrending();
  }, []);

  if (status === Status.IDLE) {
    return (
      <main>
        <section>
          <S.Title>Trending today</S.Title>
        </section>
      </main>
    );
  }

  if (status === Status.PENDING) {
    return (
      <main>
        <section>
          <S.Title>Trending today</S.Title>
          <Loader />
        </section>
      </main>
    );
  }

  if (status === Status.REJECTED) {
    return (
      <main>
        <section>
          <S.Title>Trending today</S.Title>
          <ErrorMessage errorText={error.message} />
        </section>
      </main>
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <main>
        <section>
          <S.Title>Trending today</S.Title>
          <MoviesList movies={movies} />
        </section>
      </main>
    );
  }
};

export default Home;
