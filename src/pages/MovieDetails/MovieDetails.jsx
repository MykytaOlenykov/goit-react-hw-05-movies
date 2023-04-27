import { useEffect, useState, useRef } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import * as moviesAPI from 'services';
import * as S from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
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
      <section>
        <S.GoBackLink to={backLinkLocationRef.current}>
          <HiArrowNarrowLeft />
          Go back
        </S.GoBackLink>
      </section>
      <section>
        <S.Container>
          <S.Thumb>
            <S.Image
              src={`https://image.tmdb.org/t/p/w400/${movieDetails?.poster_path}`}
              alt={movieDetails?.title}
            />
          </S.Thumb>

          <div>
            <S.PrimaryTitle>{movieDetails?.title}</S.PrimaryTitle>

            <S.UserScore>User score: {movieDetails?.vote_average}</S.UserScore>

            <S.SecondaryTitle>Overview</S.SecondaryTitle>
            <S.Overview>{movieDetails?.overview}</S.Overview>

            <S.GenresTitle>Genres</S.GenresTitle>
            <S.GenresList>
              {movieDetails?.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </S.GenresList>
          </div>
        </S.Container>
      </section>
      <S.Section>
        <S.SecondaryTitle>Additional information</S.SecondaryTitle>

        <S.LinksList>
          <li>
            <S.LinkToAddInfo to="cast">Cast</S.LinkToAddInfo>
          </li>
          <li>
            <S.LinkToAddInfo to="reviews">Reviews</S.LinkToAddInfo>
          </li>
        </S.LinksList>
      </S.Section>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default MovieDetails;
