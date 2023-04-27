import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as moviesAPI from 'services';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchMovies = async () => {
      try {
        const { results } = await moviesAPI.searchMoviesByQuery(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = newQuery => {
    const normalizedQuery = newQuery.trim();
    setSearchParams({ query: normalizedQuery });
    setQuery(normalizedQuery);
  };

  return (
    <main>
      <section>
        <SearchMovies onSubmit={handleSubmit} />
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </main>
  );
};

export default Movies;
