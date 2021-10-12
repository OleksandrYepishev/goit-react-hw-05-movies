import { useState, useEffect } from 'react';
import { moviesPopular } from '../services/moviesApi';
import MoviesList from '../components/MoviesList/MoviesList';

export default function HomeView() {
  const [movies, setMovies] = useState(null);
  const label = 'Back to Trending today';

  useEffect(() => {
    moviesPopular().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} label={label} />}
    </>
  );
}
