import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetails } from '../services/MoviesApi';
import MovieDetailsPage from '../components/MovieDetailsPage/MovieDetailsPage';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieDetails(movieId).then(setMovie);
  }, [movieId]);

  return <>{movie && <MovieDetailsPage movie={movie} />}</>;
}
