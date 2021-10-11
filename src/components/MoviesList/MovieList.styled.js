import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  padding-inline-start: 30px;
  padding-inline-end: 30px;
  overflow: auto;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
export const IMG = styled.img`
  cursor: pointer;
  width: 500px;
  height: 350px;
  object-fit: cover;
  border-radius: 5px;
  transition-duration: 0.5s;

  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  text-align: center;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;

  color: orange;
`;

export const Item = styled.li`
  list-style: none;
`;
