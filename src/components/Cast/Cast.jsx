import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from 'services';
import * as S from './Cast.styled';
import defaultAvatar from 'images/default_avatar.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await moviesAPI.getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <S.List>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <S.Card>
            <S.Thumb>
              <S.Image
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w400/${profile_path}`
                    : defaultAvatar
                }
                alt={name}
              />
            </S.Thumb>
            <S.TextBox>
              <S.PersonName>{name}</S.PersonName>
              <S.Character>Character: {character}</S.Character>
            </S.TextBox>
          </S.Card>
        </li>
      ))}
    </S.List>
  );
};

export default Cast;
