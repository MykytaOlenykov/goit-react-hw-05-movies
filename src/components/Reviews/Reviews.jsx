import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from 'services';
import * as S from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const { results } = await moviesAPI.getMovieReviews(movieId);

        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <S.List>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <S.CardReview>
                <S.Author>{author}</S.Author>
                <S.Review>{content}</S.Review>
              </S.CardReview>
            </li>
          ))}
        </S.List>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
