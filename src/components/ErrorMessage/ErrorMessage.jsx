import PropTypes from 'prop-types';
import * as S from './ErrorMessage.styled';

const ErrorMessage = ({ errorText }) => <S.ErrorText>{errorText}</S.ErrorText>;

ErrorMessage.propTypes = {
  errorText: PropTypes.string.isRequired,
};

export default ErrorMessage;
