import PropTypes from 'prop-types';
import * as S from './MoviesList.styled';

const MoviesList = ({ movies }) => (
  <S.List>
    {movies.map(({ id, title }) => (
      <li key={id}>
        <S.LinkToDetails to={`/movies/${id}`}>{title}</S.LinkToDetails>
      </li>
    ))}
  </S.List>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
