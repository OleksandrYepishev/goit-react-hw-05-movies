import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieList, LinkStyled, IMG, Title, Item } from './MovieList.styled';
import defaultImg from '../MoviesList/NoImg.jpg';

const MoviesList = ({ movies, label }) => {
  const location = useLocation();
  const imgUrl = defaultImg;

  return (
    <MovieList>
      {movies.map(movie => (
        <Item key={movie.id}>
          <LinkStyled
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: { location, label: `${label}` } },
            }}
          >
            {movie.poster_path ? (
              <IMG
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <IMG src={imgUrl} alt={movie.title} />
            )}
            <Title>{movie.title}</Title>
          </LinkStyled>
        </Item>
      ))}
    </MovieList>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};
