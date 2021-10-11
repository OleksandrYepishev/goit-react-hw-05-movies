import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  gap: 10px;
  margin-top: 70px;
  padding-inline-start: 30px;
  padding-inline-end: 30px;
  overflow: auto;
`;

export const IMG = styled.img`
  width: 175px;
  height: 290px;
  object-fit: cover;
`;

export const Item = styled.li`
  list-style: none;
`;

export const Text = styled.p`
  text-align: center;
  font-style: italic;
  font-style: oblique;
  font-size: 15px;
`;
export const TextTitle = styled.p`
  text-align: center;
  font-style: italic;
  font-style: oblique;
  font-size: 15px;
  color: blue;
`;
