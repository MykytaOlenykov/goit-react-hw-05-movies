import { Outlet } from 'react-router-dom';
import * as S from './Layout.styled';

const Layout = () => (
  <S.Container>
    <S.Header>
      <nav>
        <S.List>
          <li>
            <S.Link to="/">Home</S.Link>
          </li>
          <li>
            <S.Link to="/movies">Movies</S.Link>
          </li>
        </S.List>
      </nav>
    </S.Header>
    <Outlet />
  </S.Container>
);

export default Layout;
