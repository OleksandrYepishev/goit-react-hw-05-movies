import { useState, useEffect } from 'react';
import { movieCredits } from '../../services/MoviesApi';

export default function MovieCast({ movieId }) {
  const [casts, setCasts] = useState(null);
  useEffect(() => {
    movieCredits(movieId).then(setCasts);
  }, [movieId]);
  console.log(casts);
  return (
    <>
      <ul>
        {casts &&
          casts.cast.map(cast => (
            <li key={cast.id}>
              <img
                alt={cast.name}
                src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
