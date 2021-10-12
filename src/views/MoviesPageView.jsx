import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { moviesSearch } from '../services/moviesApi';
import Searchbar from '../components/Searchbar/Searchbar';
import MoviesList from '../components/MoviesList/MoviesList';
import { Button } from '../components/Button/Button';

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search).get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState(searchParams);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchParams) {
      return;
    }
    moviesSearch(searchParams, page).then(data => {
      if (data.length === 0) {
        return toast.error(`there is no movie with that name  ${searchMovies}`);
      }
      setMovies(prevMovies => [...prevMovies, ...data]);
    });
  }, [searchParams, page, searchMovies]);

  const onSearch = searchMovies => {
    if (searchMovies === '') {
      toast.error('U need to write a name of movie!');
      return;
    }
    setMovies([]);
    setSearchMovies(searchMovies);
    setPage(1);
    history.push({ ...location, search: `query=${searchMovies}` });
  };

  const handleBtnLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const showBtn = movies.length >= 20;
  const label = 'Back to Search Movies';

  return (
    <>
      <Searchbar onSearch={onSearch} />
      {searchMovies && <MoviesList movies={movies} label={label} />}
      {showBtn && <Button onClick={handleBtnLoadMore} />}
      <Toaster position="top-right" />
    </>
  );
}
