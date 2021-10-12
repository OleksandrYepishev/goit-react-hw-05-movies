import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => (
  <nav>
    <NavLinkStyled exact to="/">
      HomePage
    </NavLinkStyled>

    <NavLinkStyled to="/movies">Movies</NavLinkStyled>
  </nav>
);
