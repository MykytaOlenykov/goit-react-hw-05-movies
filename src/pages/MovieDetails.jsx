import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from 'services';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await moviesAPI.getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <main>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movieDetails?.poster_path}`}
        alt={movieDetails?.title}
      />
      <h1>{movieDetails?.title}</h1>
      <p>User score: {movieDetails?.vote_average}</p>
      <h2>Overview</h2>
      <p>{movieDetails?.overview}</p>
      <h3>Genres</h3>
      <p>{movieDetails?.genres.map(genre => genre.name).join(' ')}</p>
    </main>
  );
};

export default MovieDetails;
