import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import * as S from './SearchMovies.styled';

const schema = yup.object().shape({
  searchQuery: yup
    .string()
    .matches(/\s*\S.*$/, 'Enter something.')
    .required(),
});

const initialValues = {
  searchQuery: '',
};

const SearchMovies = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues: initialValues });

  return (
    <S.Form
      autoComplete="off"
      onSubmit={handleSubmit(({ searchQuery }) => {
        onSubmit(searchQuery);
        reset();
      })}
    >
      <S.Container>
        <S.Input type="text" {...register('searchQuery')} />
        {errors.searchQuery && (
          <S.ErrorText>{errors.searchQuery.message}</S.ErrorText>
        )}
      </S.Container>

      <S.Button type="submit">Search</S.Button>
    </S.Form>
  );
};

export default SearchMovies;

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
