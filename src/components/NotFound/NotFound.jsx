import * as S from './NotFound.styled';

const NotFound = () => (
  <S.Container>
    <S.ErrorMessage>Not Found</S.ErrorMessage>
    <S.ErrorCode>404</S.ErrorCode>
  </S.Container>
);

export default NotFound;
