import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => (
  <ul>
    {movies.map(({ id, title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default MoviesList;
