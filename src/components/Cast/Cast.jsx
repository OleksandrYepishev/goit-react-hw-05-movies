import { useState, useEffect } from 'react';
import { movieCredits } from '../../services/moviesApi';
import { List, IMG, Item, Text, TextTitle } from './Cast.styled';
import defaultImg from '../Cast/default.png';

export default function MovieCast({ movieId }) {
  const imgUrl = defaultImg;
  const [casts, setCasts] = useState(null);
  useEffect(() => {
    movieCredits(movieId).then(setCasts);
  }, [movieId]);

  return (
    <>
      <List>
        {casts &&
          casts.cast.map(cast => (
            <Item key={cast.id}>
              <IMG
                alt={cast.name}
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${cast.profile_path}`
                    : imgUrl
                }
              />
              <TextTitle>{cast.name}</TextTitle>
              <Text>Character: {cast.character}</Text>
            </Item>
          ))}
      </List>
    </>
  );
}
