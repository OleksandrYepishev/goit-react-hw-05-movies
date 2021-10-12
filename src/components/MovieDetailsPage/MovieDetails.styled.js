import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Btn = styled.button`
  display: block;
  cursor: pointer;
  margin: 20px auto 30px 30px;
  padding: 7px;
  border-radius: 15px;
  font-size: 15px;
  opacity: 75%;
  color: #007ba7;
  background-color: azure;

  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    color: orange;
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 30px;
  padding-inline-start: 50px;
`;
export const IMG = styled.img`
  width: 650px;
  height: 450px;
  object-fit: scale-down;
  border-radius: 5px;
  transition-duration: 0.5s;

  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  font-style: italic;
  font-weight: bold;
  font-size: 45px;
  color: blue;
`;

export const Text = styled.p`
  font-style: oblique;
  font-size: 20px;
`;
export const LinkContainer = styled.div`
  margin-top: 85px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  margin: 0 50px;
  padding: 15px 25px;
  border-radius: 15px;
  font-size: 15px;
  opacity: 75%;
  color: blue;
  background-color: azure;

  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    color: orange;
  }
`;
