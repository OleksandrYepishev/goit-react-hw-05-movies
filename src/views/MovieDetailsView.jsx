import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetails } from '../services/MoviesApi';
import MovieDetailsPage from '../components/MovieDetailsPage/MovieDetailsPage';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    movieDetails(movieId).then(setMovie);
  }, [movieId]);

  return <>{movie && <MovieDetailsPage movie={movie} />}</>;
}
